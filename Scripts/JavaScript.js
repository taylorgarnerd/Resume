var jsonLoad = $(function () {
    $.getJSON('Content/resume-1.json', function (resume) {
        //Parse information into header div
        $('#header').append('<p>' + resume.name + '</p>');

        //Parse information into contact information div
        $('#contact-information h4:first').after('<p>' + resume.email + '</p>');
        $('#contact-information h4:eq(1)').after('<p>' + resume.phone + '</p>');

        //Parse languages into skills div
        $(resume.languages).each(function (i, lang) {
            $('#skills ul').append('<li>' + lang + '</li>');
        });

        //Parse information into work-experience div
        $(resume.experience).each(function (i, exp) {
            $('#work-experience').append('<p>' + exp.employer + '</p>');
            $('#work-experience').append('<p><strong>' + exp.title + '</strong>, ' + exp.begin + ' - ' + exp.end + '</p>');

            var tasklist = '<ul>';
            $(exp.tasks).each(function (j, task) {
                tasklist += '<li>' + task + '</li>';
            });
            tasklist += '</ul>';
            $('#work-experience').append(tasklist);
        });

        //Parse information into education div
        $('#education').append('<p>' + resume.education.school + '</p>');
        $('#education').append('<p> -' + resume.education.major + '</p>');
    });
});