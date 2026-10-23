var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "activities-4",
  "level": "1",
  "url": "activities-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "24   Quadratic Forms  (LN 2.2, 2.3)",
  "body": " 24   Quadratic Forms (LN 2.2, 2.3)       True or False: for all values of and .   Hint: plot it in Desmos 3D! And: how does this exercise relate to symmetric matrices?          A is a function , given by   Matrix is and symmetric, and is a variable vector in .    Example: express in the form .        If is a symmetric matrix then there exists an orthogonal change of variable that transforms to with no cross-product terms.   Proof in the lecture videos\/textbook.      Consider: where .   a) Make a change of variable that transforms the quadratic form into another quadratic form that has no cross-product terms.  b) For what values of will satisfy for any and ?    Tip: it may help to plot the surfaces in Desmos 3D to see what the surface looks like as you change the value of .        Our goal: .  Take for example the surface:    If we set to be constant, , we obtain the equation of a circle whose radius is .      The surface above has a unique minimum at the origin. What about other surfaces?    A quadratic form is   if for all .   if for all .   if for all .   if for all .   if takes on positive and negative values for .        If is a symmetric matrix with eigenvalues , then is   when all eigenvalues are positive   when all eigenvalues are negative   when at least one eigenvalue is negative and at least one eigenvalue is positive           Assume . Construct the matrix of the quadratic form, and classify the quadratic form.    "
},
{
  "id": "activities-4-3-2",
  "level": "2",
  "url": "activities-4.html#activities-4-3-2",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": "  A is a function , given by   Matrix is and symmetric, and is a variable vector in .   "
},
{
  "id": "activities-4-4-2",
  "level": "2",
  "url": "activities-4.html#activities-4-4-2",
  "type": "Theorem",
  "number": "2",
  "title": "",
  "body": " If is a symmetric matrix then there exists an orthogonal change of variable that transforms to with no cross-product terms.  "
},
{
  "id": "activities-4-5-7",
  "level": "2",
  "url": "activities-4.html#activities-4-5-7",
  "type": "Definition",
  "number": "3",
  "title": "",
  "body": "  A quadratic form is   if for all .   if for all .   if for all .   if for all .   if takes on positive and negative values for .     "
},
{
  "id": "activities-4-5-8",
  "level": "2",
  "url": "activities-4.html#activities-4-5-8",
  "type": "Theorem",
  "number": "4",
  "title": "",
  "body": "  If is a symmetric matrix with eigenvalues , then is   when all eigenvalues are positive   when all eigenvalues are negative   when at least one eigenvalue is negative and at least one eigenvalue is positive     "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
