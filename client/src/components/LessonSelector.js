import React from 'react';
import Lesson from './Lesson.js'

const LessonSelector = function({lessons, chooseLesson}) {

    const listOfLessons = lessons.map((lesson) => { //listOfLessons creates a new array of Lesson objects, with the following properties pulled out
        return <Lesson lesson={lesson} key={lesson._id} title={lesson.lesson_title}/>
    })

    const handleChange = (event) => { //when the select option is changed, the chooseLesson function is called using the lessons _id
        chooseLesson(event.target.value)
    };

    return(
        <>
        <p>Pick your Sub-Topic</p>
        <select required onChange={handleChange}>
        <option selected disabled></option>
            {listOfLessons}
        </select>
        </>
    )
};

export default LessonSelector;