$(function () {
	var model = {
		init: function (json) {
			this.resume = "Content/resume-1.json";
		},
		change: function (resumeName) {
			this.resume = 'Content/' + resumeName + '.json';
		}
	};

	var octopus = {
		getResume: function () {
			return model.resume;
		},
		changeResume: function (name) {
			model.change(name);
			resumeView.render();
		},
		init: function () {
			model.init();
			resumeView.init();
		}
	};

	var resumeView = {
		init: function () {
			this.header = $('#header');
			this.skills = $('#skills');
			this.workExperience = $('#work-experience');
			this.education = $('#education');

			resumeView.render();

			$('#selector').change(function () {
				octopus.changeResume($("#selector option:selected").text());
                //jsonLoad($("#selector option:selected").text());
            });
		},
		render: function () {

			$.getJSON(octopus.getResume(), function (resume) {
				//Clear all <p> and <ul> elements to prepare for new <div> appends
	            $('p').remove();
	            $('ul').remove();

	            //Add a double slash to the header (this is added here for simplicity in removing <p> elements
	            resumeView.header.append('<p>//</p>');

	            //Parse information into header div
	            resumeView.header.append('<p>' + resume.name + '</p>');

	            //Parse information into contact information div
	            $('#contact-information h4:first').after('<p>' + resume.email + '</p>');
	            $('#contact-information h4:eq(1)').after('<p>' + resume.phone + '</p>');

	            //Parse languages into skills div
	            resumeView.skills.append('<ul>');
	            $(resume.languages).each(function (i, lang) {
	                $('#skills ul').append('<li>' + lang + '</li>');
	            });

	            //Parse information into work-experience div
	            $(resume.experience).each(function (i, exp) {
	               resumeView.workExperience.append('<p>' + exp.employer + '</p>');
	               resumeView.workExperience.append('<p><strong>' + exp.title + '</strong>, ' + exp.begin + ' - ' + exp.end + '</p>');
	                
	                var tasklist = '<ul>';
	                $(exp.tasks).each(function (j, task) {
	                    tasklist += '<li>' + task + '</li>';
	                });
	                tasklist += '</ul>';
	                resumeView.workExperience.append(tasklist);
	            });

	            //Parse information into education div
	            resumeView.education.append('<p>' + resume.education.school + '</p>');
	            resumeView.education.append('<p> -' + resume.education.major + '</p>');
			});

		}
	};

	var mapView = {
		init: function () {

		},
		render: function () {

		}
	};

	octopus.init();
});