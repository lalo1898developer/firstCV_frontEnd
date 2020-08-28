import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) => {  
    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [profile, setProfile] = useState('');
    const academicData = [];
    const [schoolNameAcademicData, setSchoolNameAcademicData] = useState('');
    const [entryDateAcademicData, setEntryDateAcademicData] = useState('');
    const [endDateAcademicData, setEndDateAcademicData] = useState('');
    const [bachelorNameAcademicData, setBachelorNameAcademicData] = useState('');
    const workData = [];
    const [workNameWorkData, setWorkNameWorkData] = useState('');
    const [entryDateWorkData, setEntryDateWorkData] = useState('');
    const [endDateWorkData, setEndDateWorkData] = useState('');
    const [positionWorkData, setPositionWorkData] = useState('');
    const [workDescriptionWorkData, setWorkDescriptionWorkData] = useState('');
    const knowledge = [];
    const [conceptKnowledge, setConceptKnowledge] = useState('');
    const courses = [];
    const [academyNameCourses, setAcademyNameCourses] = useState('');
    const [realizationDateCourses, setRealizationDateCourses] = useState('');
    const [courseNameCourses, setCourseNameCourses] = useState('');

    academicData.push(
        {
            schoolName: schoolNameAcademicData,
            entryDate: entryDateAcademicData,
            endDate: endDateAcademicData,
            bachelorName: bachelorNameAcademicData
        }
    );

    workData.push(
        {
            workName: workNameWorkData,
            entryDate: entryDateWorkData,
            endDate: endDateWorkData,
            position: positionWorkData,
            workDescription: workDescriptionWorkData
        }
    );

    knowledge.push(
        {
            concept: conceptKnowledge
        }
    );

    courses.push(
        {
            academyName: academyNameCourses,
            realizationDate: realizationDateCourses,
            courseName: courseNameCourses
        }
    );
  
  return (
    <FormContext.Provider value={{ 
        title, setTitle,
        phone, setPhone,
        postalCode, setPostalCode,
        profile, setProfile,
        academicData,
        schoolNameAcademicData, setSchoolNameAcademicData,
        entryDateAcademicData, setEntryDateAcademicData,
        endDateAcademicData, setEndDateAcademicData,
        bachelorNameAcademicData, setBachelorNameAcademicData,
        workData,
        workNameWorkData, setWorkNameWorkData,
        entryDateWorkData, setEntryDateWorkData,
        endDateWorkData, setEndDateWorkData,
        positionWorkData, setPositionWorkData,
        workDescriptionWorkData, setWorkDescriptionWorkData,
        knowledge,
        conceptKnowledge, setConceptKnowledge,
        courses,
        academyNameCourses, setAcademyNameCourses,
        realizationDateCourses, setRealizationDateCourses,
        courseNameCourses, setCourseNameCourses
     }}>
      { props.children }
    </FormContext.Provider>
  )
};

export default FormContextProvider;