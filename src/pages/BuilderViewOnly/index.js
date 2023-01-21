import React, { useState, useEffect, useRef } from 'react';
// import {Link} from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';
import moment from 'moment';

import BuilderDocumentViewOnly from '../../Components/BuilderWrapper/BuilderDocumentViewOnly/BuilderDocument';

import BLANKTEMPLATEDATA from '../../Components/BlankTemplate/blankTemplateData';

import Template1Data from '../../Components/Templates/Template1/Template1Data';

import Template13Data from '../../Components/Templates/Template13/Template13Data';

import Template22Data from '../../Components/Templates/Template22/Template22Data';

import Template28Data from '../../Components/Templates/Template28/Template28Data';

import Template29Data from '../../Components/Templates/Template29/Template29Data';

import { get_resume_by_id } from '../../API';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import BuilderHeader from '../../Components/BuilderWrapper/BuilderHeader/BuilderHeader';

export default function Builder({ setUserLoggedIn, userData, userLoggedIn }) {
  const { chosenTemplate, resumeId, share } = useParams();
  const jwtToken = localStorage.getItem('jwtToken');
  const userId = localStorage.getItem('id');
  const [resumeData, setResumeData] = useState(null);
  const [document_name, setDocument_name] = useState('');
  // console.log('share', share);

  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  const getResumeData = async () => {
    await get_resume_by_id(resumeId, config).then((res) => {
      if (res.status === 200 || res.status === 304) {
        setResumeData({
          ...res.data,
          documentData: JSON.parse(res.data.documentData),
        });
        setDocument_name(res.data.documentName);
      }
    });
  };
  useEffect(() => {
    resumeId && getResumeData();
  }, []);

  const [template, setTemplate] = useState(chosenTemplate || 'blankTemplate');
  const history = useHistory();

  const { BlankTemplateData } = BLANKTEMPLATEDATA();
  const { template1Data } = Template1Data();
  const { template13Data } = Template13Data();
  const { template22Data } = Template22Data();
  const { template28Data } = Template28Data();
  const { template29Data } = Template29Data();

  const templateDataSelector = template === 'blankTemplate' ? BlankTemplateData : template === 'template_1' ? template1Data : template === 'template_13' ? template13Data : template === 'template_22' ? template22Data : template === 'template_28' ? template28Data : template === 'template_29' ? template29Data : null; // prettier-ignore

  const pageData = JSON.parse(localStorage.getItem('pageData'));
  const pageDataSelector =
    template === 'blankTemplate'
      ? (resumeData?.documentData.templateName === chosenTemplate
          ? resumeData?.documentData.pageEditorData
          : resumeId
          ? null
          : templateDataSelector) ?? templateDataSelector
      : resumeData?.documentData.templateName === chosenTemplate
      ? resumeData?.documentData.pageEditorData
      : resumeId
      ? null
      : templateDataSelector;
  //  ?? templateDataSelector;
  // const pageDataSelector = pageData?.templateName === chosenTemplate ? pageData.pageEditorData : templateDataSelector;
  const pageEditorData = resumeData?.documentData.pageEditorData;
  // console.log({ ...pageEditorData, ...templateDataSelector }); //,  resumeData?.documentData.pageEditorData
  const [templateUpdatableData, setTemplateUpdatableData] = useState(pageDataSelector); // prettier-ignore
  console.log(
    (resumeData?.documentData.templateName === chosenTemplate
      ? resumeData?.documentData.pageEditorData
      : resumeId
      ? null
      : templateDataSelector) ?? templateDataSelector
  );

  useEffect(() => {
    resumeId && setTemplateUpdatableData(pageDataSelector);
  }, [pageDataSelector]);
  // console.log(resumeData);
  const [active, setActive] = useState('resume');

  const [showChangeTemplateSidebar, setShowChangeTemplateSidebar] =
    useState(false);

  const addSectionModal = useRef('');
  const addSectionModalBG = useRef('');
  const loginPopup = useRef('');
  const loginPopupBG = useRef('');

  // SubHeader Style Variables
  const [pageLayout, setPageLayout] = useState('A4');
  const [lineHeight, setLineHeight] = useState(1);
  const [docummentMargin, setDocummentMargin] = useState('Compact');
  const [docummentDateFormat, setDocummentDateFormat] = useState('1 / 22');
  const [documentHeadingTextStyle, setDocumentHeadingTextStyle] =
    useState('Poppins');
  const [documentBodyTextStyle, setDocumentBodyTextStyle] = useState('Poppins');
  const [documentBodyTextSize, setDocumentBodyTextSize] = useState('Medium');
  const [borderedPage, setBorderedPage] = useState(false);
  const [pageBorderWidth, setPageBorderWidth] = useState(1);
  const [pageBorderStyle, setPageBorderStyle] = useState('solid');
  const [pageBorderColor, setPageBorderColor] = useState('black');

  const rightMainRef = useRef();
  const wholePageMainRef = useRef();

  const mainSection1 = useRef(null);
  const mainSection2 = useRef(null);
  const mainSection3 = useRef(null);
  const mainSection4 = useRef(null);
  const mainSection5 = useRef(null);
  const mainSection6 = useRef(null);

  const subSection1 = useRef(null);
  const subSection2 = useRef(null);
  const subSection3 = useRef(null);
  const subSection4 = useRef(null);
  const subSection5 = useRef(null);

  const [key, setKey] = useState(10);

  const [showOnFirstPage, setShowOnFirstPage] = useState(true);
  const [showOnSecondPage, setShowOnSecondPage] = useState(true);
  const [showOnThirdPage, setShowOnThirdPage] = useState(true);

  // */*****************************************************************************************************************\*

  // Templates Data

  // */*********************************************************************\*

  // Blank Template Data

  const blankTemplateColor = {
    sidePanelBgColor: '#fff',
    sidePanelTextColor: '#000',
  };

  const blankTemplateDataLeftSection = [];

  const blankTemplateDataRightSection = [];

  // */*********************************************************************\*

  // Template 1 Data

  const template1Color = {
    sidePanelBgColor: '#ffe4c4',
    sidePanelTextColor: '#000',
  };

  const template1DataLeftSection = [
    {
      key: 1,
      name: 'experience_highlight',
      heading: templateUpdatableData?.exp_1_heading,
      setHeading: template1Data.setExp_1_heading,
      subSection: true,
      description: [
        {
          key: 1440,
          description: templateUpdatableData?.exp_1_description,
          setDescription: template1Data.setExp_1_description,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      name: 'experience_highlight',
      heading: templateUpdatableData?.exp_2_heading,
      setHeading: template1Data.setExp_2_heading,
      subSection: true,
      description: [
        {
          key: 1430,
          description: templateUpdatableData?.exp_2_description,
          setDescription: template1Data.setExp_2_description,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'education',
      heading: templateUpdatableData?.edu_heading,
      setHeading: template1Data.setEdu_heading,
      subSection: true,
      description: [
        {
          key: 1450,
          description: templateUpdatableData?.edu_description,
          setDescription: template1Data.setEdu_description,
        },
      ],
      ref: subSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
    },
    {
      key: 4,
      name: 'personal',
      heading: templateUpdatableData?.contact_heading,
      setHeading: template1Data.setContact_heading,
      subSection: true,
      description: [
        {
          key: 1476,
          description: templateUpdatableData?.contact_description,
          setDescription: template1Data.setContact_description,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template1DataRightSection = [
    {
      key: 5,
      class: 'blankTemplate_header section',
      heading: templateUpdatableData?.main_header,
      setHeading: template1Data.setMain_header,
      // heading: 'none',
      name: 'personal',
      subSection: false,
      // description: template1Data.main_header,
      description: 'none',
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.profile_heading,
      setHeading: template1Data.setProfile_heading,
      subSection: true,
      description: [
        {
          key: 1260,
          description: templateUpdatableData?.profile_description,
          setDescription: template1Data.setProfile_description,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.main_section_1_heading,
      setHeading: template1Data.setMain_section_1_heading,
      subSection: true,
      description: [
        {
          key: 1100,
          description: templateUpdatableData?.main_section_1_description,
          setDescription: template1Data.setMain_section_1_description,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.main_section_2_heading,
      setHeading: template1Data.setMain_section_2_heading,
      subSection: true,
      description: [
        {
          key: 1400,
          description: templateUpdatableData?.main_section_2_description,
          setDescription: template1Data.setMain_section_2_description,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 9,
      name: 'experience',
      class: 'block',
      heading: templateUpdatableData?.main_exp_heading,
      setHeading: template1Data.setMain_exp_heading,
      subSection: true,
      description: [
        {
          key: 1100,
          description: templateUpdatableData?.main_exp_1_description,
          setDescription: template1Data.setMain_exp_1_description,
        },
        {
          key: 1101,
          description: templateUpdatableData?.main_exp_2_description,
          setDescription: template1Data.setMain_exp_2_description,
        },
        {
          key: 1102,
          description: templateUpdatableData?.main_exp_3_description,
          setDescription: template1Data.setMain_exp_3_description,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 2 Data

  const [skill_1_expertice, setSkill_1_expertice] = useState(80);
  const [skill_2_expertice, setSkill_2_expertice] = useState(50);
  const [skill_3_expertice, setSkill_3_expertice] = useState(30);
  const [skill_4_expertice, setSkill_4_expertice] = useState(90);
  const [skill_5_expertice, setSkill_5_expertice] = useState(70);
  const [skill_6_expertice, setSkill_6_expertice] = useState(40);
  const [skill_7_expertice, setSkill_7_expertice] = useState(80);
  const [skill_8_expertice, setSkill_8_expertice] = useState(30);
  const [skill_9_expertice, setSkill_9_expertice] = useState(60);

  const [language_1_expertice, setLanguage_1_expertice] = useState(80);
  const [language_2_expertice, setLanguage_2_expertice] = useState(60);
  const [language_3_expertice, setLanguage_3_expertice] = useState(20);
  const [language_4_expertice, setLanguage_4_expertice] = useState(70);

  const [software_1_expertice, setSoftware_1_expertice] = useState(100);
  const [software_2_expertice, setSoftware_2_expertice] = useState(80);
  const [software_3_expertice, setSoftware_3_expertice] = useState(60);

  // */*********************************************************************\*

  // Template 13 Data

  const template13Color = {
    sidePanelBgColor: '#F2F2F2',
    sidePanelTextColor: '#4D1F03',
  };

  const template13DataLeftSection = [{ data: null }];

  const template13DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template13Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template13Data.setPosition,
      description: templateUpdatableData?.main_descp,
      setDescription: template13Data.setMain_descp,
      contacts: [
        {
          data: templateUpdatableData?.phone,
          setData: template13Data.setPhone,
          type: 'phone',
        },
        {
          data: templateUpdatableData?.email,
          setData: template13Data.setEmail,
          type: 'email',
        },
        {
          data: templateUpdatableData?.website,
          setData: template13Data.setWebsite,
          type: 'website',
        },
        {
          data: templateUpdatableData?.address,
          setData: template13Data.setAddress,
          type: 'address',
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template13Data.setEducation,
      subSection: false,
      description: [
        {
          key: 3323,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template13Data.setEdu_1_heading,
          name: templateUpdatableData?.edu_1_name,
          setName: template13Data.setEdu_1_name,
          location: templateUpdatableData?.edu_1_location,
          setLocation: template13Data.setEdu_1_location,
        },
        {
          key: 3324,
          heading: templateUpdatableData?.edu_2_heading,
          setHeading: template13Data.setEdu_2_heading,
          name: templateUpdatableData?.edu_2_name,
          setName: template13Data.setEdu_2_name,
          location: templateUpdatableData?.edu_2_location,
          setLocation: template13Data.setEdu_2_location,
        },
        {
          key: 3325,
          heading: templateUpdatableData?.edu_3_heading,
          setHeading: template13Data.setEdu_3_heading,
          name: templateUpdatableData?.edu_3_name,
          setName: template13Data.setEdu_3_name,
          location: templateUpdatableData?.edu_3_location,
          setLocation: template13Data.setEdu_3_location,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template13Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template13Data.setExp_1_tenure,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template13Data.setExp_1_heading,
          location: templateUpdatableData?.edu_1_location,
          setLocation: template13Data.setEdu_1_location,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template13Data.setExp_1_descp,
        },
        {
          key: 9832,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template13Data.setExp_2_tenure,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template13Data.setExp_2_heading,
          location: templateUpdatableData?.edu_2_location,
          setLocation: template13Data.setEdu_2_location,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template13Data.setExp_2_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'skills_certificate',
      skills: [
        {
          key: 4534,
          name: 'skills',
          heading: templateUpdatableData?.skills,
          setHeading: template13Data.setSkills,
          description: [
            {
              key: 5641,
              description: templateUpdatableData?.skills_descp,
              setDescription: template13Data.setSkills_descp,
            },
          ],
        },
      ],
      certificate: [
        {
          key: 4534,
          name: 'certification',
          heading: templateUpdatableData?.certificate,
          setHeading: template13Data.setCertificate,
          description: [
            {
              key: 5431,
              description: templateUpdatableData?.certificate_descp_1,
              setDescription: template13Data.setCertificate_descp_1,
            },
            {
              key: 54342,
              description: templateUpdatableData?.certificate_descp_2,
              setDescription: template13Data.setCertificate_descp_2,
            },
          ],
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 22 Data

  const template22Color = {
    sidePanelBgColor: '#1A1A1A',
    sidePanelTextColor: '#000000',
  };

  const template22DataLeftSection = [{ data: null }];

  const template22DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template22Data.setName,
      position: templateUpdatableData?.position,
      setPosition: template22Data.setPosition,
      subSection: false,
      description: [
        {
          key: 9031,
          description: templateUpdatableData?.profileDescp,
          setDescription: template22Data.setProfileDescp,
        },
      ],
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'professional',
      type: 'primary',
      heading: templateUpdatableData?.main_heading,
      setHeading: template22Data.setMain_heading,
      subSection: true,
      description: [
        {
          key: 9931,
          description: templateUpdatableData?.main_descp,
          setDescription: template22Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template22Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template22Data.setExp_1_heading,
          tenure: templateUpdatableData?.exp_1_tenure,
          setTenure: template22Data.setExp_1_tenure,
          position: templateUpdatableData?.exp_1_positon,
          setPosition: template22Data.setExp_1_positon,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template22Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template22Data.setExp_2_heading,
          tenure: templateUpdatableData?.exp_2_tenure,
          setTenure: template22Data.setExp_2_tenure,
          position: templateUpdatableData?.exp_2_positon,
          setPosition: template22Data.setExp_2_positon,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template22Data.setExp_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      class: 'block',
      name: 'education',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template22Data.setEducation,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.edu_1_heading,
          setHeading: template22Data.setEdu_1_heading,
          tenure: templateUpdatableData?.edu_1_tenure,
          setTenure: template22Data.setEdu_1_tenure,
          position: templateUpdatableData?.edu_1_positon,
          setPosition: template22Data.setEdu_1_positon,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      class: 'block',
      type: 'skills_interest',
      skill_name: 'skills',
      skill_heading: templateUpdatableData?.skills,
      setSkill_heading: template22Data.setSkills,
      skill_description: [
        {
          key: 5751,
          description: templateUpdatableData?.skills_descp,
          setDescription: template22Data.setSkills_descp,
        },
      ],
      interest_name: 'interests',
      interest_heading: templateUpdatableData?.interest,
      setInterest_heading: template22Data.setInterest,
      interest_description: [
        {
          key: 9871,
          description: templateUpdatableData?.interest_descp,
          setDescription: template22Data.setInterest_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  // */*********************************************************************\*

  // Template 28 Data

  const template28Color = {
    sidePanelBgColor: '#000000',
    sidePanelTextColor: '#000000',
  };

  const template28DataLeftSection = [
    {
      key: 1,
      name: 'experience_highlight',
      type: 'management',
      heading: templateUpdatableData?.management_heading,
      setHeading: template28Data.setManagement_heading,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.management_descp,
          setDescription: template28Data.setManagement_descp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      name: 'experience_highlight',
      type: 'scientific',
      heading: templateUpdatableData?.scientific_heading,
      setHeading: template28Data.setScientific_heading,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.scientific_descp,
          setDescription: template28Data.setScientific_descp,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      name: 'education',
      class: 'block',
      type: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template28Data.setEducation,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.edu_1_descp,
          setDescription: template28Data.setEdu_1_descp,
        },
        {
          key: 4754,
          description: templateUpdatableData?.edu_2_descp,
          setDescription: template28Data.setEdu_2_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      name: 'personal',
      type: 'contact',
      heading: templateUpdatableData?.contact,
      setHeading: template28Data.setContact,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.conatct_descp,
          setDescription: template28Data.setConatct_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template28DataRightSection = [
    {
      key: 4,
      class: 'block',
      name: 'personal',
      header: true,
      heading: templateUpdatableData?.name,
      setHeading: template28Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template28Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 5,
      type: 'profile',
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.profile,
      setHeading: template28Data.setProfile,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.profile_descp,
          setDescription: template28Data.setProfile_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 6,
      type: 'section_1',
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.section_1_heading,
      setHeading: template28Data.setSection_1_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.section_1_descp,
          setDescription: template28Data.setSection_1_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      type: 'section_2',
      name: 'achievement',
      class: 'block',
      heading: templateUpdatableData?.section_2_heading,
      setHeading: template28Data.setSection_2_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.section_2_descp,
          setDescription: template28Data.setSection_2_descp,
        },
      ],
      ref: mainSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      type: 'experience',
      name: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template28Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template28Data.setExp_1_heading,
          position: templateUpdatableData?.exp_1_position,
          setPosition: template28Data.setExp_1_position,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template28Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template28Data.setExp_2_heading,
          position: templateUpdatableData?.exp_2_position,
          setPosition: template28Data.setExp_2_position,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template28Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template28Data.setExp_3_heading,
          position: templateUpdatableData?.exp_3_position,
          setPosition: template28Data.setExp_3_position,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template28Data.setExp_3_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // */*********************************************************************\*

  // Template 29 Data

  const template29Color = {
    sidePanelBgColor: '#4D4D4D',
    sidePanelTextColor: '#333333',
  };

  const template29DataLeftSection = [
    {
      key: 1,
      type: 'contact',
      name: 'personal',
      heading: templateUpdatableData?.contact,
      setHeading: template29Data.setContact,
      description: [
        {
          key: 5753,
          description: templateUpdatableData?.contact_descp,
          setDescription: template29Data.setContact_descp,
        },
      ],
      ref: subSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
    },
    {
      key: 2,
      type: 'education',
      name: 'education',
      heading: templateUpdatableData?.education,
      setHeading: template29Data.setEducation,
      subSection: false,
      description: [
        {
          key: 4753,
          description: templateUpdatableData?.edu_1,
          setDescription: template29Data.setEdu_1,
        },
        {
          key: 4754,
          description: templateUpdatableData?.edu_2,
          setDescription: template29Data.setEdu_2,
        },
      ],
      ref: subSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
    },
    {
      key: 3,
      class: 'block',
      name: 'skills',
      type: 'skill',
      heading: templateUpdatableData?.skills,
      setHeading: template29Data.setSkills,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.skill_descp,
          setDescription: template29Data.setSkill_descp,
        },
      ],
      ref: mainSection3,
      id: 'mainSection3',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 4,
      type: 'certifications',
      name: 'certification',
      heading: templateUpdatableData?.certifications,
      setHeading: template29Data.setCertifications,
      description: [
        {
          key: 9851,
          description: templateUpdatableData?.certifications_descp,
          setDescription: template29Data.setCertifications_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
    {
      key: 5,
      type: 'interests',
      name: 'interests',
      heading: templateUpdatableData?.interests,
      setHeading: template29Data.setInterests,
      description: [
        {
          key: 9551,
          description: templateUpdatableData?.interest_descp,
          setDescription: template29Data.setInterest_descp,
        },
      ],
      ref: subSection4,
      id: 'mainSection4',
      firstPage: showOnFirstPage,
    },
  ];

  const template29DataRightSection = [
    {
      key: 6,
      class: 'block',
      header: true,
      name: 'personal',
      heading: templateUpdatableData?.name,
      setHeading: template29Data.setName,
      subSection: false,
      position: templateUpdatableData?.position,
      setPosition: template29Data.setPosition,
      ref: mainSection1,
      id: 'mainSection1',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 7,
      type: 'main',
      name: 'professional',
      class: 'block',
      heading: templateUpdatableData?.main_heading,
      setHeading: template29Data.setMain_heading,
      description: [
        {
          key: 9631,
          description: templateUpdatableData?.main_descp,
          setDescription: template29Data.setMain_descp,
        },
      ],
      ref: mainSection2,
      id: 'mainSection2',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
    {
      key: 8,
      class: 'block',
      name: 'experience',
      type: 'experience',
      heading: templateUpdatableData?.experience,
      setHeading: template29Data.setExperience,
      subSection: true,
      description: [
        {
          key: 9831,
          heading: templateUpdatableData?.exp_1_heading,
          setHeading: template29Data.setExp_1_heading,
          position: templateUpdatableData?.exp_1_position,
          setPosition: template29Data.setExp_1_position,
          description: templateUpdatableData?.exp_1_descp,
          setDescription: template29Data.setExp_1_descp,
        },
        {
          key: 9832,
          heading: templateUpdatableData?.exp_2_heading,
          setHeading: template29Data.setExp_2_heading,
          position: templateUpdatableData?.exp_2_position,
          setPosition: template29Data.setExp_2_position,
          description: templateUpdatableData?.exp_2_descp,
          setDescription: template29Data.setExp_2_descp,
        },
        {
          key: 9833,
          heading: templateUpdatableData?.exp_3_heading,
          setHeading: template29Data.setExp_3_heading,
          position: templateUpdatableData?.exp_3_position,
          setPosition: template29Data.setExp_3_position,
          description: templateUpdatableData?.exp_3_descp,
          setDescription: template29Data.setExp_3_descp,
        },
      ],
      ref: mainSection5,
      id: 'mainSection5',
      firstPage: showOnFirstPage,
      secondPage: !showOnSecondPage,
      thirdPage: !showOnThirdPage,
    },
  ];

  // Condition to select data for different Templates

  const setDataUpdatableRightConditions =
    template === 'blankTemplate'
      ? blankTemplateDataRightSection
      : template === 'template_1'
      ? template1DataRightSection
      : template === 'template_13'
      ? template13DataRightSection
      : template === 'template_22'
      ? template22DataRightSection
      : template === 'template_28'
      ? template28DataRightSection
      : template === 'template_29'
      ? template29DataRightSection
      : null;

  const setDataUpdatableLeftConditions =
    template === 'blankTemplate'
      ? blankTemplateDataLeftSection
      : template === 'template_1'
      ? template1DataLeftSection
      : template === 'template_13'
      ? template13DataLeftSection
      : template === 'template_22'
      ? template22DataLeftSection
      : template === 'template_28'
      ? template28DataLeftSection
      : template === 'template_29'
      ? template29DataLeftSection
      : null;

  // Template Selector

  const TemplateSelector =
    template === 'blankTemplate'
      ? 'blankTemplate'
      : template === 'template_1'
      ? 'template_1'
      : template === 'template_13'
      ? 'template_13'
      : template === 'template_22'
      ? 'template_22'
      : template === 'template_28'
      ? 'template_28'
      : template === 'template_29'
      ? 'template_29'
      : null;

  // Templates Color Selector

  const setSidePanelBgColorSelector =
    template === 'blankTemplate'
      ? blankTemplateColor.sidePanelBgColor
      : template === 'template_1'
      ? template1Color.sidePanelBgColor
      : template === 'template_13'
      ? template13Color.sidePanelBgColor
      : template === 'template_22'
      ? template22Color.sidePanelBgColor
      : template === 'template_28'
      ? template28Color.sidePanelBgColor
      : template === 'template_29'
      ? template29Color.sidePanelBgColor
      : null;

  const setSidePanelTextColorSelector =
    template === 'blankTemplate'
      ? blankTemplateColor.sidePanelTextColor
      : template === 'template_1'
      ? template1Color.sidePanelTextColor
      : template === 'template_13'
      ? template13Color.sidePanelTextColor
      : template === 'template_22'
      ? template22Color.sidePanelTextColor
      : template === 'template_28'
      ? template28Color.sidePanelTextColor
      : template === 'template_29'
      ? template29Color.sidePanelTextColor
      : null;

  const setMainPanelBgColorSelector =
    template === 'blankTemplate'
      ? null
      : template === 'template_1'
      ? null
      : template === 'template_13'
      ? null
      : template === 'template_18'
      ? null
      : null;

  // Templates Add Sections Selector for disserent Templates

  const headingTextStyleConditions =
    documentHeadingTextStyle === 'Arial'
      ? 'arial-h '
      : documentHeadingTextStyle === 'Arial Narrow'
      ? 'arial_Narrow-h '
      : documentHeadingTextStyle === 'Avenir'
      ? 'avenir-h '
      : documentHeadingTextStyle === 'Book Antiqua'
      ? 'book_Antiqua-h '
      : documentHeadingTextStyle === 'Calibri'
      ? 'calibri-h '
      : documentHeadingTextStyle === 'Cambria'
      ? 'cambria-h'
      : documentHeadingTextStyle === 'Century Sans'
      ? 'century_Sans-h '
      : documentHeadingTextStyle === 'Constantia'
      ? 'constantia-h '
      : documentHeadingTextStyle === 'Garamond'
      ? 'garamond-h '
      : documentHeadingTextStyle === 'Geneva'
      ? 'geneva-h '
      : documentHeadingTextStyle === 'Georama'
      ? 'georama-h '
      : documentHeadingTextStyle === 'Georgia'
      ? 'georgia-h '
      : documentHeadingTextStyle === 'Gill Sans'
      ? 'gill_Sans-h '
      : documentHeadingTextStyle === 'Helvetica'
      ? 'helvetica-h '
      : documentHeadingTextStyle === 'Karla'
      ? 'karla-h '
      : documentHeadingTextStyle === 'Lato'
      ? 'lato-h '
      : documentHeadingTextStyle === 'Merriweather'
      ? 'merriweather-h '
      : documentHeadingTextStyle === 'Montserrat'
      ? 'montserrat-h '
      : documentHeadingTextStyle === 'Open Sans'
      ? 'open_Sans-h '
      : documentHeadingTextStyle === 'Oswald'
      ? 'oswald-h '
      : documentHeadingTextStyle === 'Poppins'
      ? 'poppins-h '
      : documentHeadingTextStyle === 'Raleway'
      ? 'raleway-h '
      : documentHeadingTextStyle === 'Roboto'
      ? 'roboto-h '
      : documentHeadingTextStyle === 'Tahoma'
      ? 'tahoma-h '
      : documentHeadingTextStyle === 'Trebuchet MS'
      ? 'trebuchet_MS-h '
      : documentHeadingTextStyle === 'Ubuntu'
      ? 'ubuntu-h '
      : documentHeadingTextStyle === 'Veranda'
      ? 'veranda-h '
      : null;

  const bodyTextStyleConditions =
    documentBodyTextStyle === 'Arial'
      ? 'arial-p '
      : documentBodyTextStyle === 'Arial Narrow'
      ? 'arial_Narrow-p '
      : documentBodyTextStyle === 'Avenir'
      ? 'avenir-p '
      : documentBodyTextStyle === 'Book Antiqua'
      ? 'book_Antiqua-p '
      : documentBodyTextStyle === 'Calibri'
      ? 'calibri-p '
      : documentBodyTextStyle === 'Cambria'
      ? 'cambria-p'
      : documentBodyTextStyle === 'Century Sans'
      ? 'century_Sans-p '
      : documentBodyTextStyle === 'Constantia'
      ? 'constantia-p '
      : documentBodyTextStyle === 'Garamond'
      ? 'garamond-p '
      : documentBodyTextStyle === 'Geneva'
      ? 'geneva-p '
      : documentBodyTextStyle === 'Georama'
      ? 'georama-p '
      : documentBodyTextStyle === 'Georgia'
      ? 'georgia-p '
      : documentBodyTextStyle === 'Gill Sans'
      ? 'gill_Sans-p '
      : documentBodyTextStyle === 'Helvetica'
      ? 'helvetica-p '
      : documentBodyTextStyle === 'Karla'
      ? 'karla-p '
      : documentBodyTextStyle === 'Lato'
      ? 'lato-p '
      : documentBodyTextStyle === 'Merriweather'
      ? 'merriweather-p '
      : documentBodyTextStyle === 'Montserrat'
      ? 'montserrat-p '
      : documentBodyTextStyle === 'Open Sans'
      ? 'open_Sans-p '
      : documentBodyTextStyle === 'Oswald'
      ? 'oswald-p '
      : documentBodyTextStyle === 'Poppins'
      ? 'poppins-p '
      : documentBodyTextStyle === 'Raleway'
      ? 'raleway-p '
      : documentBodyTextStyle === 'Roboto'
      ? 'roboto-p '
      : documentBodyTextStyle === 'Tahoma'
      ? 'tahoma-p '
      : documentBodyTextStyle === 'Trebuchet MS'
      ? 'trebuchet_MS-p '
      : documentBodyTextStyle === 'Ubuntu'
      ? 'ubuntu-p '
      : documentBodyTextStyle === 'Veranda'
      ? 'veranda-p '
      : null;

  const headingTextSizeConditions =
    documentBodyTextSize === 'Very Small'
      ? 'heading_verySmall'
      : documentBodyTextSize === 'Small'
      ? 'heading_small'
      : documentBodyTextSize === 'Medium'
      ? 'heading_medium'
      : documentBodyTextSize === 'Large'
      ? 'heading_large'
      : null;

  const bodyTextSizeConditions =
    documentBodyTextSize === 'Very Small'
      ? 'body_verySmall'
      : documentBodyTextSize === 'Small'
      ? 'body_small'
      : documentBodyTextSize === 'Medium'
      ? 'body_medium'
      : documentBodyTextSize === 'Large'
      ? 'body_large'
      : null;

  const pageDocumentData = JSON.stringify({
    type: 'resume',
    document_name,
    date: moment().format('MMM DD, YYYY'),
    templateName: TemplateSelector,
    pageEditorData: templateDataSelector,
  });
  const saveBuilderData = {
    userId: userId,
    documentName: document_name,
    documentData: pageDocumentData,
  };

  // Setting BlankTempplate Data

  const [dataUpdatableRight, setDataUpdatableRight] = useState(
    templateUpdatableData && setDataUpdatableRightConditions
  );
  const [dataUpdatableLeft, setDataUpdatableLeft] = useState(
    templateUpdatableData && setDataUpdatableLeftConditions
  );
  useEffect(() => {
    setDataUpdatableRight(setDataUpdatableRightConditions);
    setDataUpdatableLeft(setDataUpdatableLeftConditions);
  }, []);
  // Setting Template 2 Data
  // const [dataUpdatableRight, setDataUpdatableRight] = useState(template2DataRightSection)
  // const [dataUpdatableLeft, setDataUpdatableLeft] = useState(template2DataLeftSection)

  const [pageNo, setPageNo] = useState(1);

  const TemplatesPagesData = [
    {
      key: 1,
      template: TemplateSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo,
    },
  ];

  const TemplatesPagesData_with_2_pages = [
    {
      key: 1,
      template: TemplateSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo,
    },
    {
      key: 2,
      template: TemplateSelector,
      rightMainRef: rightMainRef,
      wholePageMainRef: wholePageMainRef,
      setDataUpdatableRight: setDataUpdatableRight,
      setDataUpdatableLeft: setDataUpdatableLeft,
      dataUpdatableRight: dataUpdatableRight,
      dataUpdatableLeft: dataUpdatableLeft,
      page: pageNo + 1,
    },
  ];

  const [pageUpdatableData, setPageUpdatableData] = useState(
    templateUpdatableData
      ? template === 'executiveTemplate_8' ||
        template === 'executiveTemplate_9' ||
        template === 'executiveTemplate_10'
        ? TemplatesPagesData_with_2_pages
        : TemplatesPagesData
      : resumeId
      ? null
      : TemplatesPagesData
  );

  const addPage_Modal = (addPage, addPara) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='addPage_Modal'>
            <div>
              {/* <h1>Are you sure?</h1> */}
              <p>
                CVJury best practice principles suggest that an ideal resume
                must be of one page only. Do you still want to add more text?
              </p>
              <button onClick={onClose}>No</button>
              <button
                onClick={() => {
                  setPageNo(pageNo + 1);
                  setKey(key + 1);
                  // data.ref.current.style.display = 'none'
                  pageUpdatableData.push(addPage[0]);
                  dataUpdatableRight.push(addPara[0]);
                  // setPageUpdatableData(pageUpdatableData.push(addPage[0]))
                  onClose();
                }}
              >
                Yes, Add!
              </button>
            </div>
          </div>
        );
      },
    });
  };

  const maxHeight = 800;

  // Adding sections on click

  // Blank Template

  // Template Colors
  const [sidePanelBgColor, setSidePanelBgColor] = useState(
    setSidePanelBgColorSelector
  );
  const [sidePanelTextColor, setSidePanelTextColor] = useState(
    setSidePanelTextColorSelector
  );
  const [mainPanelBgColor, setMainPanelBgColor] = useState(
    setMainPanelBgColorSelector
  );

  function updateBuilderDocument() {
    return resumeId && pageUpdatableData === null ? (
      <div className='builder_loader_wrapper'>
        <ThreeDots wrapperClass='loader' />
      </div>
    ) : (
      // <div className='builder_loader_wrapper'>
      //   <ThreeDots wrapperClass='loader' />
      // </div>
      <BuilderDocumentViewOnly
        share={share}
        showBuilderButton={true}
        readOnly={true}
        resumeId={resumeId}
        saveBuilderData={saveBuilderData}
        pageDocumentData={pageDocumentData}
        document_name={resumeId ? resumeData?.documentName : document_name}
        setDocument_name={setDocument_name}
        templateName={TemplateSelector}
        templateDataSelector={templateDataSelector}
        addSectionModal={addSectionModal}
        addSectionModalBG={addSectionModalBG}
        pageBorderColor={pageBorderColor}
        pageBorderWidth={pageBorderWidth}
        pageBorderStyle={pageBorderStyle}
        borderedPage={borderedPage}
        headingTextStyleConditions={headingTextStyleConditions}
        bodyTextStyleConditions={bodyTextStyleConditions}
        headingTextSizeConditions={headingTextSizeConditions}
        bodyTextSizeConditions={bodyTextSizeConditions}
        mainPanelBgColor={mainPanelBgColor}
        sidePanelTextColor={sidePanelTextColor}
        sidePanelBgColor={sidePanelBgColor}
        pageUpdatableData={pageUpdatableData}
        pageLayout={pageLayout}
        lineHeight={lineHeight}
        docummentMargin={docummentMargin}
        docummentDateFormat={docummentDateFormat}
        documentHeadingTextStyle={documentHeadingTextStyle}
        documentBodyTextStyle={documentBodyTextStyle}
        documentBodyTextSize={documentBodyTextSize}
      />
    );
  }

  // console.log('pageUpdatableData', pageUpdatableData);

  useEffect(() => {
    templateUpdatableData &&
      setDataUpdatableRight(setDataUpdatableRightConditions);
    templateUpdatableData &&
      setDataUpdatableLeft(setDataUpdatableLeftConditions);
    templateUpdatableData && setSidePanelBgColor(setSidePanelBgColorSelector);
    templateUpdatableData &&
      setSidePanelTextColor(setSidePanelTextColorSelector);
    templateUpdatableData && setMainPanelBgColor(setMainPanelBgColorSelector);

    // // console.log('from useEffect ', dataUpdatableRight)
    // // console.log('from useEffect ', dataUpdatableLeft)
    templateUpdatableData &&
      (template === 'executiveTemplate_8' ||
      template === 'executiveTemplate_9' ||
      template === 'executiveTemplate_10'
        ? setPageUpdatableData([
            {
              key: 1,
              template: TemplateSelector,
              rightMainRef: rightMainRef,
              wholePageMainRef: wholePageMainRef,
              setDataUpdatableRight: setDataUpdatableRight,
              setDataUpdatableLeft: setDataUpdatableLeft,
              dataUpdatableRight: dataUpdatableRight,
              dataUpdatableLeft: dataUpdatableLeft,
              page: pageNo,
            },
            {
              key: 2,
              template: TemplateSelector,
              rightMainRef: rightMainRef,
              wholePageMainRef: wholePageMainRef,
              setDataUpdatableRight: setDataUpdatableRight,
              setDataUpdatableLeft: setDataUpdatableLeft,
              dataUpdatableRight: dataUpdatableRight,
              dataUpdatableLeft: dataUpdatableLeft,
              page: pageNo + 1,
            },
          ])
        : setPageUpdatableData([
            {
              key: 1,
              template: TemplateSelector,
              rightMainRef: rightMainRef,
              wholePageMainRef: wholePageMainRef,
              setDataUpdatableRight: setDataUpdatableRight,
              setDataUpdatableLeft: setDataUpdatableLeft,
              dataUpdatableRight: setDataUpdatableRightConditions,
              dataUpdatableLeft: setDataUpdatableLeftConditions,
              page: pageNo,
            },
          ]));

    updateBuilderDocument();
    // setKey(key+1)
  }, [template, templateUpdatableData]);

  useEffect(() => {
    setTimeout(() => {
      if (!userLoggedIn) {
        localStorage.setItem('pageData', pageDocumentData);
        loginPopup.current.style.display = 'flex'; // modal visible
        loginPopupBG.current.style.display = 'flex'; // modal bg visible
      }
    }, 20000);
    if (userLoggedIn) {
      // login_Modal()
      loginPopup.current.style.display = 'none'; // modal visible
      loginPopupBG.current.style.display = 'none'; // modal bg visible
    }
  });

  return (
    <div className='builder'>
      <div className='builderViewWrapper'>
        <BuilderHeader
          builderData={{ length: 0 }}
          userLoggedIn={userLoggedIn}
          userData={userData}
          share={share}
        />

        {/* <div className='builderViewBlocker'></div> */}
        {updateBuilderDocument()}
      </div>
      <div ref={loginPopupBG} className='addSectionModal_bg loginModalBG'></div>
      <div ref={loginPopup} className='addSectionModal loginModal'>
        <div className='addPage_Modal login_modal'>
          <div>
            <h1>Loving it?</h1>
            <p>Let's create your CVJury account.</p>
            <div>
              <a href='/login'>
                <button>Login</button>
              </a>
              <a href='/signup'>
                <button className='login_modal_secondary_btn'>SignUp</button>
              </a>
            </div>
            {/* <button onClick={onClose}>No</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
