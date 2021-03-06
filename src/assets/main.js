$(function() {
    $.ajax({
      url: 'https://www.codeschool.com/users/NBowes.json',
      dataType: 'jsonp',
      success: function(response){
        console.log(response);
        addCourse(response.courses.completed);
      }
    });

    function addCourse(courses){
      var $badges = $('#badges');
        courses.forEach(function(course){
          var $course = $('<div />').addClass('course').appendTo($badges);
            $('<h3 />').text(course.title).appendTo($course);
            $('<img />').attr('src',course.badge).appendTo($course);
            $('<a />').text("See Course").addClass('btn btn-primary')
            .attr('href', course.url,'target','_blank')
            .appendTo($course);
        });

    }
});
