$(function() {
    $.ajax({
      url: 'https://www.codeschool.com/users/NBowes.json',
      dataType: 'jsonp',
      success: function(response){
        addCourse(response.courses.completed);
      }
    });
    var $badges = $('#badges');

    function addCourse(courses){
        courses.forEach(function(course){
          var $course = $('<div />',{'class':'course'}).appendTo($badges);
            $('<h3 />',{text: course.title}).appendTo($course);
            $('<img />',{src: course.badge}).appendTo($course);
            $('<a />', {text: "See Course",
                       'class':'btn btn-primary',
                       'href' :course.url,
                       'target':'_blank'})
                                       .appendTo($course);
        });

    }
});
