import appointment_img from './appointment_img.png';
import header_img from './header_img.png';
import group_profiles from './group_profiles.png';
import profile_pic from './profile_pic.png';
import contact_image from './contact_image.png';
import about_image from './about_image.png';
import logo from './logo.svg';
import dropdown_icon from './dropdown_icon.svg';
import menu_icon from './menu_icon.svg';
import cross_icon from './cross_icon.png';
import chats_icon from './chats_icon.svg';
import verified_icon from './verified_icon.svg';
import arrow_icon from './arrow_icon.svg';
import info_icon from './info_icon.svg';
import upload_icon from './upload_icon.png';
import stripe_logo from './stripe_logo.png';
import razorpay_logo from './razorpay_logo.png';
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';
import doc6 from './doc6.png';
import doc7 from './doc7.png';
import doc8 from './doc8.png';
import doc9 from './doc9.png';
import doc10 from './doc10.png';
import doc11 from './doc11.png';
import doc12 from './doc12.png';
import doc13 from './doc13.png';
import doc14 from './doc14.png';
import doc15 from './doc15.png';
import Dermatologist from './Dermatologist.svg';
import Gastroenterologist from './Gastroenterologist.svg';
import General_physician from './General_physician.svg';
import Gynecologist from './Gynecologist.svg';
import Neurologist from './Neurologist.svg';
import Pediatricians from './Pediatricians.svg';

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
};

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician,
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist,
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist,
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians,
    },
    {
        speciality: 'Neurologist',
        image: Neurologist,
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist,
    },
];

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Abhijeet Sharan',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Abhijeet has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc2',
        name: 'Dr. Krati Gupta',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Krati has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc3',
        name: 'Dr. Aakash Chaudhary',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Aakash has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1200,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc4',
        name: 'Dr. Shivam Kumar Das',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Shivam has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1300,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc5',
        name: 'Dr. Sonam Mishra',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sonam has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc6',
        name: 'Dr. Amit Kumar',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Amit has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc7',
        name: 'Dr. Rishi Raj',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rishi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc8',
        name: 'Dr. Rishabh Shankar',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Rishabh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc9',
        name: 'Dr. Supragya',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Supragya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc10',
        name: 'Dr. Vinayak Sharma',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Vinayak has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc11',
        name: 'Dr. Sumi Chatterjee',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sumi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2500,
        address: {
            line1: 'Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc12',
        name: 'Dr. Rishi Kumar Singh',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rishi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Jatin Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc13',
        name: 'Dr. Shubham Verma',
        image: doc13,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Shubham has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Jatin Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc14',
        name: 'Dr. Ayush Kumar',
        image: doc14,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ayush has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Jatin Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    },
    {
        _id: 'doc15',
        name: 'Dr. Harshita',
        image: doc15,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Harshita has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2000,
        address: {
            line1: 'Jatin Jatin Chandra Road, Lower Burdwan Compound',
            line2: 'Lalpur, Ranchi',
        },
    }
]
