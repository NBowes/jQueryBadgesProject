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
          $('<div>').addClass('course').appendTo($badges);
        });
    }
});
