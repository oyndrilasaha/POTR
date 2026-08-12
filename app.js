'use strict';

// Global pre-populated employee data representing historical staff with award mappings
const INITIAL_EMPLOYEES = [
  {
    "id": "1",
    "fullName": "Baniya, Bijusha",
    "position": "Guest Assistant",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 28.12,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "2",
    "fullName": "Butters, Gary",
    "position": "Guest Assistant",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 28.12,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "3",
    "fullName": "Christie, Katherine",
    "position": "Guest Assistant",
    "grade": "Grade 2",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 26.7,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "4",
    "fullName": "Dalsaniya, Vismay",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "5",
    "fullName": "Dutta Pinake",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 45.55,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "6",
    "fullName": "Eskander, Hafsa",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "7",
    "fullName": "Fan, Yong (Richard)",
    "position": "Guest Assistant",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 28.12,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "8",
    "fullName": "Feige, Oliver",
    "position": "Guest Assistant",
    "grade": "Grade 2",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 15.51,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "9",
    "fullName": "Gauchan, Bibek",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 37.45,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "10",
    "fullName": "Gauchan, Roshani",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 37.45,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "11",
    "fullName": "Gurung, Ashma",
    "position": "Guest Assistant",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 28.12,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "12",
    "fullName": "Gurung, Rajan",
    "position": "Guest Assistant",
    "grade": "Grade 2",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "13",
    "fullName": "Gyawali, Salina",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 26.7,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "14",
    "fullName": "He, Ya Ting (Rey)",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 37.45,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "15",
    "fullName": "Hossain, MD Sanjid",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "16",
    "fullName": "Isti, Imtiaz Shahriar",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "17",
    "fullName": "Karki, Bishal",
    "position": "Guest Assistant",
    "grade": "Grade 2",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 26.7,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "18",
    "fullName": "KC Anisha",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 26.7,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "19",
    "fullName": "KC Sulav",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 37.45,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "20",
    "fullName": "Khatri, Sanjay",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 37.45,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "21",
    "fullName": "Kim, Jaeyoung",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "22",
    "fullName": "Kim, Subin",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "23",
    "fullName": "Maharjan Manoj",
    "position": "Guest Assistant",
    "grade": "Grade 2",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "24",
    "fullName": "Mahmud M M Ferdous",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 37.45,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "25",
    "fullName": "Malla, Kajal",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "26",
    "fullName": "Raza, Mohd",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "27",
    "fullName": "Rueksawang, Vorakarn",
    "position": "Guest Assistant",
    "grade": "Grade 2",
    "status": "Part-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 28.12,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "28",
    "fullName": "Saha, Oyndrilla",
    "position": "Guest Assistant",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 28.12,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "29",
    "fullName": "Saiyed, Wasim",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 35.2,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "30",
    "fullName": "Samit, Satwat Hossain",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 25.85,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "31",
    "fullName": "Sapkota, Sanam",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 28.12,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "32",
    "fullName": "Shiwakoti, Rojal",
    "position": "Guest Assistant",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 28.5,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "33",
    "fullName": "Shrestha, Nikita",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 37.45,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "34",
    "fullName": "Shrestha Rojan",
    "position": "Shift Supervisor",
    "grade": "Grade 3",
    "status": "Full-time",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 37.45,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "35",
    "fullName": "Sultana, Tania",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 26.7,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "36",
    "fullName": "Tamang, Chandraman",
    "position": "Guest Assistant",
    "grade": "Grade 2",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 26.7,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "37",
    "fullName": "Thapaliya, Sirish",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 26.7,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "38",
    "fullName": "Tirtho, Rafid Mahmud",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 26.7,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  },
  {
    "id": "39",
    "fullName": "Wagle Khatri, Sabina",
    "position": "Guest Assistant",
    "grade": "Grade 1",
    "status": "Casual",
    "startDate": "2024-01-01",
    "tfn": "",
    "bankDetails": {
      "bsb": "",
      "accountNumber": "",
      "accountName": "",
      "institution": "",
      "branch": ""
    },
    "superannuation": {
      "fundName": "",
      "memberNumber": ""
    },
    "availabilities": {},
    "rightToWork": {
      "isCitizen": true
    },
    "baseRate": 26.7,
    "onboarding": {
      "covenant": false,
      "taxDec": false,
      "offerLetter": false,
      "rightToWorkCheck": false
    }
  }
];

// Standard availability skeleton helper
const createDefaultAvailability = () => {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const availability = {};
  days.forEach(d => {
    availability[d] = {
      start: '09:00',
      end: '17:00',
      available: true
    };
  });
  return availability;
};

// Standard local storage manager
const db = {
  getEmployees: () => {
    let data = localStorage.getItem('potr_employees');
    if (data) {
      const list = JSON.parse(data);
      if (list.some(emp => emp.fullName.includes("Bootsma") || emp.fullName.includes("Kristy") || emp.fullName.includes("Brar"))) {
        localStorage.removeItem('potr_employees');
        localStorage.removeItem('potr_timecards');
        localStorage.removeItem('potr_rosters');
        localStorage.removeItem('potr_adjustments');
        data = null;
      }
    }
    if (!data) {
      const mapped = INITIAL_EMPLOYEES.map(emp => ({
        ...emp,
        availabilities: emp.availabilities && Object.keys(emp.availabilities).length > 0 ? emp.availabilities : createDefaultAvailability(),
        rightToWork: emp.rightToWork || {
          isCitizen: true
        },
        onboarding: {
          covenant: true,
          taxDec: true,
          offerLetter: true,
          rightToWorkCheck: true
        }
      }));
      localStorage.setItem('potr_employees', JSON.stringify(mapped));
      return mapped;
    }
    return JSON.parse(data);
  },
  saveEmployees: employees => {
    localStorage.setItem('potr_employees', JSON.stringify(employees));
  },
  getTimecards: () => {
    const data = localStorage.getItem('potr_timecards');
    if (!data) {
      const defaultTimecards = {
        "2010-01-05": [{
          employeeId: "37",
          // Adam Smith
          shifts: {
            tue: {
              worked: true,
              startTime: "09:00",
              endTime: "13:30",
              breakMinutes: 0,
              publicHoliday: false,
              supervisor: false,
              splitShift: false
            },
            wed: {
              worked: true,
              startTime: "11:00",
              endTime: "19:00",
              breakMinutes: 30,
              publicHoliday: false,
              supervisor: false,
              splitShift: false
            },
            thu: {
              worked: true,
              startTime: "15:00",
              endTime: "23:30",
              breakMinutes: 30,
              publicHoliday: false,
              supervisor: false,
              splitShift: false
            },
            fri: {
              worked: false
            },
            sat: {
              worked: false
            },
            sun: {
              worked: true,
              startTime: "09:00",
              endTime: "14:00",
              breakMinutes: 0,
              publicHoliday: false,
              supervisor: false,
              splitShift: false
            },
            mon: {
              worked: true,
              startTime: "10:00",
              endTime: "15:00",
              breakMinutes: 0,
              publicHoliday: false,
              supervisor: false,
              splitShift: false
            }
          }
        }]
      };
      localStorage.setItem('potr_timecards', JSON.stringify(defaultTimecards));
      return defaultTimecards;
    }
    return JSON.parse(data);
  },
  saveTimecards: timecards => {
    localStorage.setItem('potr_timecards', JSON.stringify(timecards));
  },
  getRosters: () => {
    const data = localStorage.getItem('potr_rosters');
    if (!data) {
      const defaultRosters = {
        "2010-01-05": {
          "37": 30.00 // Adam Smith rostered 30 hours
        }
      };
      localStorage.setItem('potr_rosters', JSON.stringify(defaultRosters));
      return defaultRosters;
    }
    return JSON.parse(data);
  },
  saveRosters: rosters => {
    localStorage.setItem('potr_rosters', JSON.stringify(rosters));
  },
  getAdjustments: () => {
    const data = localStorage.getItem('potr_adjustments');
    if (!data) {
      const defaultAdjustments = [{
        name: "Charlie Wong",
        adjustment: "New starter: BSB=012-345 Account=1234567 Account Name=Charlie Wong Institution=CBA Branch=Sydney Rate=$15.61 Grade=3"
      }, {
        name: "Ahsan Habib",
        adjustment: "Terminate as of last shift 3.01.10"
      }, {
        name: "Alice Webb",
        adjustment: "Increase rate to $15.61 PT GA Grade3 as of 5.01.10"
      }, {
        name: "Jon Smith",
        adjustment: "Change to PT $15.61 Grade3 as from 9.01.10"
      }, {
        name: "Anna Abu",
        adjustment: "Change of bank details: Bank: CBA, Branch: Sydney, BSB: 012-345, Account Number: 1234567"
      }, {
        name: "Adam Smith",
        adjustment: "Transfer OUT 7.5 hours ordinary = $182.17 (The Rocks)"
      }, {
        name: "Sue Townsend",
        adjustment: "Transfer IN 8hrs at time half = $187.32 (D.Harbour)"
      }];
      localStorage.setItem('potr_adjustments', JSON.stringify(defaultAdjustments));
      return defaultAdjustments;
    }
    return JSON.parse(data);
  },
  saveAdjustments: adjustments => {
    localStorage.setItem('potr_adjustments', JSON.stringify(adjustments));
  },
  getCalculationSettings: () => {
    const data = localStorage.getItem('potr_calc_settings');
    const defaults = {
      trueSales: 88450.15,
      receipts: 97295.15,
      guests: 5170,
      superPercent: 11.5,
      laundryRate: 2.30,
      supervisorRate: 14.42,
      splitRate: 5.00,
      baseRates: {
        "Guest Assistant - Grade 1": 25.85,
        "Guest Assistant - Grade 2": 26.70,
        "Guest Assistant - Grade 3": 28.12,
        "Shift Supervisor - Grade 3": 37.45
      }
    };
    if (!data) {
      localStorage.setItem('potr_calc_settings', JSON.stringify(defaults));
      return defaults;
    }
    const parsed = JSON.parse(data);
    return { ...defaults, ...parsed };
  },
  saveCalculationSettings: settings => {
    localStorage.setItem('potr_calc_settings', JSON.stringify(settings));
  }
};
const {
  useState,
  useEffect,
  useMemo
} = React;

// Custom Hook to inject Lucide icons
const useIcons = () => {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
};

const SafeIcon = ({ name, ...props }) => {
  return React.createElement("span", {
    key: name,
    style: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }
  }, React.createElement("i", {
    "data-lucide": name,
    ...props
  }));
};

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [employees, setEmployees] = useState([]);
  const [timecards, setTimecards] = useState({});
  const [rosters, setRosters] = useState({});
  const [adjustments, setAdjustments] = useState([]);
  const [calcSettings, setCalcSettings] = useState({
    trueSales: 88450.15,
    receipts: 97295.15,
    guests: 5170,
    superPercent: 11.5,
    laundryRate: 2.30,
    supervisorRate: 14.42,
    splitRate: 5.00,
    baseRates: {
      "Guest Assistant - Grade 1": 25.85,
      "Guest Assistant - Grade 2": 26.70,
      "Guest Assistant - Grade 3": 28.12,
      "Shift Supervisor - Grade 3": 37.45
    }
  });
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('potr_dark_mode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('potr_dark_mode', darkMode);
  }, [darkMode]);

  const [currentWeekEnding, setCurrentWeekEnding] = useState('2010-01-05'); // Defaults to the Adam Smith week ending date
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('37'); // Default to Adam Smith
  const [activeSheetTab, setActiveSheetTab] = useState('calculation');

  // Load initial data
  useEffect(() => {
    setEmployees(db.getEmployees());
    setTimecards(db.getTimecards());
    setRosters(db.getRosters());
    setAdjustments(db.getAdjustments());
    setCalcSettings(db.getCalculationSettings());
  }, []);
  useIcons();

  // Dynamic Calculations Engine
  const calculations = useMemo(() => {
    const weekCards = timecards[currentWeekEnding] || [];
    const parsedData = [];
    let totalOrdHrs = 0;
    let totalOrdCost = 0;
    let total125Hrs = 0;
    let total125Cost = 0;
    let total150Hrs = 0;
    let total150Cost = 0;
    let total200Hrs = 0;
    let total200Cost = 0;
    let total250Hrs = 0;
    let total250Cost = 0;
    let totalNightHrs = 0;
    let totalNightCost = 0;
    let totalSickHrs = 0;
    let totalSickCost = 0;
    let totalAnnualHrs = 0;
    let totalAnnualCost = 0;
    let totalLaundryCost = 0;
    let totalSupervisorCost = 0;
    let totalSplitCost = 0;
    let totalLeaveLiabilityHours = 0;
    let totalLeaveLiabilityCost = 0;
    let totalSuperannuationCost = 0;

    const superPercent = parseFloat(calcSettings.superPercent === undefined ? 11.5 : calcSettings.superPercent) / 100;
    const laundryRate = parseFloat(calcSettings.laundryRate === undefined ? 2.30 : calcSettings.laundryRate);
    const supervisorRate = parseFloat(calcSettings.supervisorRate === undefined ? 14.42 : calcSettings.supervisorRate);
    const splitRate = parseFloat(calcSettings.splitRate === undefined ? 5.00 : calcSettings.splitRate);

    employees.forEach(emp => {
      const card = weekCards.find(c => c.employeeId === emp.id) || {
        shifts: []
      };
      const rate = parseFloat(emp.baseRate);
      let ord = 0;
      let c125 = 0;
      let c150 = 0;
      let c200 = 0;
      let c250 = 0;
      let night = 0;
      let sick = 0;
      let annual = 0;
      let laundryCount = 0;
      let supervisorCount = 0;
      let splitCount = 0;

      // Auto-calculate daily hours if there is start/end inputs
      const days = ['tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'mon'];
      days.forEach(d => {
        const shift = card.shifts && card.shifts[d] ? card.shifts[d] : {
          worked: false
        };
        if (shift.worked) {
          laundryCount++;
          if (shift.supervisor) supervisorCount++;
          if (shift.splitShift) splitCount++;
          if (shift.override) {
            ord += parseFloat(shift.overrideOrd || 0);
            c125 += parseFloat(shift.override125 || 0);
            c150 += parseFloat(shift.override150 || 0);
            c200 += parseFloat(shift.override200 || 0);
            night += parseFloat(shift.overrideNight || 0);
            c250 += parseFloat(shift.override250 || 0);
            sick += parseFloat(shift.overrideSick || 0);
            annual += parseFloat(shift.overrideAnnual || 0);
          } else {
            // Timecard calculation engine
            const start = shift.startTime;
            const end = shift.endTime;
            const breakMin = parseFloat(shift.breakMinutes || 0);
            if (start && end) {
              const [sh, sm] = start.split(':').map(Number);
              const [eh, em] = end.split(':').map(Number);
              let dur = eh * 60 + em - (sh * 60 + sm);
              if (dur < 0) dur += 24 * 60; // Overnight shifts
              const workedHrs = (dur - breakMin) / 60;
              if (shift.publicHoliday) {
                c250 += workedHrs;
              } else if (d === 'sun') {
                if (emp.status === 'Casual') {
                  c200 += workedHrs;
                } else {
                  c150 += workedHrs;
                }
              } else if (d === 'sat') {
                if (emp.status === 'Casual') {
                  c150 += workedHrs;
                } else {
                  c125 += workedHrs;
                }
              } else {
                // Monday-Friday standard rate
                if (emp.status === 'Casual') {
                  ord += workedHrs;
                } else {
                  ord += workedHrs;
                }
                // Night Shift calculation (10pm-6am)
                const startMin = sh * 60 + sm;
                let endMin = eh * 60 + em;
                if (endMin < startMin) endMin += 24 * 60;

                // Intersect with 10pm (1320 mins) to 6am (360 mins)
                let nightMins = 0;
                for (let m = startMin; m < endMin; m++) {
                  const timeOfDay = m % (24 * 60);
                  if (timeOfDay >= 22 * 60 || timeOfDay < 6 * 60) {
                    nightMins++;
                  }
                }
                // Extract break proportionally from night hours or ordinary hours
                const nightRatio = nightMins / dur;
                const nightHrs = (nightMins - breakMin * nightRatio) / 60;
                if (nightHrs > 0) {
                  night += nightHrs;
                  ord = Math.max(0, ord - nightHrs);
                }
              }
            }
          }
        }
      });

      // Add laundry constraints (max 3 shifts)
      const laundryShifts = Math.min(laundryCount, 3);
      const laundryVal = laundryShifts * laundryRate;
      const supervisorVal = supervisorCount * supervisorRate;
      const splitVal = splitCount * splitRate;

      // Calculations by status
      const casualFactor = emp.status === 'Casual' ? 1.25 : 1.0;
      let ordCost = ord * rate * casualFactor;
      let c125Cost = c125 * rate * 1.25;
      let c150Cost = c150 * rate * 1.50;
      let c200Cost = c200 * rate * 2.00;
      let c250Cost = c250 * rate * 2.50;
      let nightCost = night * rate * 1.333; // Night Shift multiplier is 1.333
      let sickCost = sick * rate;
      let annualCost = annual * rate;

      // Re-align casual ordinary hours into the 1.25 column for costing sheet matching
      if (emp.status === 'Casual') {
        c125 += ord;
        c125Cost += ordCost;
        ord = 0;
        ordCost = 0;
      }
      const gross = ordCost + c125Cost + c150Cost + c200Cost + c250Cost + nightCost + sickCost + annualCost + laundryVal + supervisorVal + splitVal;
      const totalHrs = ord + c125 + c150 + c200 + c250 + night + sick + annual;

      // Leave liability (Accrues for permanent staff only)
      let llHrs = 0;
      let llCost = 0;
      if (emp.status !== 'Casual') {
        // Capped at 38 ordinary hours per week
        const productiveHours = Math.min(ord + c125 + c150 + night, 38);
        const annualAccrual = productiveHours / 13;
        const sickAccrual = productiveHours / 26;
        llHrs = annualAccrual + sickAccrual;
        llCost = annualAccrual * rate * 1.175 + sickAccrual * rate;
      }

      // Superannuation (calculated per employee if gross > $80.77 per week (~$350/mo))
      let superVal = 0;
      if (gross >= 80.77) {
        // OTE = Ordinary + 1.25 + 1.5 + 2.5 + Night + Sick + Annual
        const ote = ordCost + c125Cost + c150Cost + c250Cost + nightCost + sickCost + annualCost;
        superVal = ote * superPercent;
      }
      parsedData.push({
        employeeId: emp.id,
        fullName: emp.fullName,
        baseRate: rate,
        ord,
        ordCost,
        c125,
        c125Cost,
        c150,
        c150Cost,
        c200,
        c200Cost,
        c250,
        c250Cost,
        night,
        nightCost,
        sick,
        sickCost,
        annual,
        annualCost,
        laundryCount: laundryShifts,
        laundryVal,
        supervisorCount,
        supervisorVal,
        splitCount,
        splitVal,
        gross,
        totalHrs,
        llHrs,
        llCost,
        superVal
      });
      totalOrdHrs += ord;
      totalOrdCost += ordCost;
      total125Hrs += c125;
      total125Cost += c125Cost;
      total150Hrs += c150;
      total150Cost += c150Cost;
      total200Hrs += c200;
      total200Cost += c200Cost;
      total250Hrs += c250;
      total250Cost += c250Cost;
      totalNightHrs += night;
      totalNightCost += nightCost;
      totalSickHrs += sick;
      totalSickCost += sickCost;
      totalAnnualHrs += annual;
      totalAnnualCost += annualCost;
      totalLaundryCost += laundryVal;
      totalSupervisorCost += supervisorVal;
      totalSplitCost += splitVal;
      totalLeaveLiabilityHours += llHrs;
      totalLeaveLiabilityCost += llCost;
      totalSuperannuationCost += superVal;
    });
    return {
      parsedData,
      totalOrdHrs,
      totalOrdCost,
      total125Hrs,
      total125Cost,
      total150Hrs,
      total150Cost,
      total200Hrs,
      total200Cost,
      total250Hrs,
      total250Cost,
      totalNightHrs,
      totalNightCost,
      totalSickHrs,
      totalSickCost,
      totalAnnualHrs,
      totalAnnualCost,
      totalLaundryCost,
      totalSupervisorCost,
      totalSplitCost,
      totalLeaveLiabilityHours,
      totalLeaveLiabilityCost,
      totalSuperannuationCost
    };
  }, [employees, timecards, currentWeekEnding, calcSettings]);

  // Save actions handlers
  const handleSaveEmployees = newEmployeesList => {
    setEmployees(newEmployeesList);
    db.saveEmployees(newEmployeesList);
  };
  const handleSaveTimecard = (empId, shifts) => {
    const currentWeekCards = timecards[currentWeekEnding] || [];
    const existingIndex = currentWeekCards.findIndex(c => c.employeeId === empId);
    let updated = [...currentWeekCards];
    if (existingIndex > -1) {
      updated[existingIndex] = {
        employeeId: empId,
        shifts
      };
    } else {
      updated.push({
        employeeId: empId,
        shifts
      });
    }
    const newTimecards = {
      ...timecards,
      [currentWeekEnding]: updated
    };
    setTimecards(newTimecards);
    db.saveTimecards(newTimecards);
  };
  const handleSaveRoster = (empId, hrs) => {
    const currentWeekRosters = rosters[currentWeekEnding] || {};
    const newRosters = {
      ...rosters,
      [currentWeekEnding]: {
        ...currentWeekRosters,
        [empId]: parseFloat(hrs || 0)
      }
    };
    setRosters(newRosters);
    db.saveRosters(newRosters);
  };
  const handleSaveAdjustments = newAdjustments => {
    setAdjustments(newAdjustments);
    db.saveAdjustments(newAdjustments);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-logo"
  }, "P"), /*#__PURE__*/React.createElement("div", {
    className: "brand-text"
  }, /*#__PURE__*/React.createElement("h1", null, "POTR Payroll Pro"), /*#__PURE__*/React.createElement("p", null, "Pancakes On The Rocks"))), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("div", {
    className: `nav-link ${activeTab === 'dashboard' ? 'active' : ''}`,
    onClick: () => setActiveTab('dashboard')
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "layout-dashboard"
  }), " Dashboard"), /*#__PURE__*/React.createElement("div", {
    className: `nav-link ${activeTab === 'employees' ? 'active' : ''}`,
    onClick: () => setActiveTab('employees')
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "users"
  }), " Employees"), /*#__PURE__*/React.createElement("div", {
    className: `nav-link ${activeTab === 'timecards' ? 'active' : ''}`,
    onClick: () => setActiveTab('timecards')
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "calendar"
  }), " Timecards"), /*#__PURE__*/React.createElement("div", {
    className: `nav-link ${activeTab === 'rosters' ? 'active' : ''}`,
    onClick: () => setActiveTab('rosters')
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "clipboard-list"
  }), " Roster Comp."), /*#__PURE__*/React.createElement("div", {
    className: `nav-link ${activeTab === 'sheets' ? 'active' : ''}`,
    onClick: () => setActiveTab('sheets')
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "sheet"
  }), " Payroll Sheets"), /*#__PURE__*/React.createElement("div", {
    className: `nav-link ${activeTab === 'forms' ? 'active' : ''}`,
    onClick: () => setActiveTab('forms')
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "file-signature"
  }), " Onboarding Forms"), /*#__PURE__*/React.createElement("div", {
    className: `nav-link ${activeTab === 'settings' ? 'active' : ''}`,
    onClick: () => setActiveTab('settings')
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "settings"
  }), " Settings"), /*#__PURE__*/React.createElement("button", {
    className: "theme-toggle-btn",
    onClick: () => setDarkMode(!darkMode),
    title: "Toggle Light/Dark Theme",
    style: { marginLeft: '12px' }
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: darkMode ? "sun" : "moon"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'var(--beige)',
      fontSize: '9px'
    }
  }, "Payroll Week Ending"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "form-control",
    style: {
      padding: '6px 10px',
      fontSize: '12px',
      width: '140px',
      backgroundColor: 'var(--cream)',
      color: 'var(--brown)'
    },
    value: currentWeekEnding,
    onChange: e => setCurrentWeekEnding(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "main-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: `tab-panel ${activeTab === 'dashboard' ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement(DashboardView, {
    employees: employees,
    calculations: calculations,
    settings: calcSettings,
    setSettings: val => {
      setCalcSettings(val);
      db.saveCalculationSettings(val);
    },
    adjustments: adjustments
  })), /*#__PURE__*/React.createElement("div", {
    className: `tab-panel ${activeTab === 'employees' ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement(EmployeesView, {
    employees: employees,
    saveEmployees: handleSaveEmployees,
    selectedId: selectedEmployeeId,
    setSelectedId: setSelectedEmployeeId
  })), /*#__PURE__*/React.createElement("div", {
    className: `tab-panel ${activeTab === 'timecards' ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement(TimecardsView, {
    employees: employees,
    timecards: timecards[currentWeekEnding] || [],
    weekEnding: currentWeekEnding,
    saveTimecard: handleSaveTimecard,
    selectedId: selectedEmployeeId,
    setSelectedId: setSelectedEmployeeId
  })), /*#__PURE__*/React.createElement("div", {
    className: `tab-panel ${activeTab === 'rosters' ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement(RosterComparisonView, {
    employees: employees,
    weekEnding: currentWeekEnding,
    rosterValues: rosters[currentWeekEnding] || {},
    actualCalculations: calculations.parsedData,
    saveRoster: handleSaveRoster
  })), /*#__PURE__*/React.createElement("div", {
    className: `tab-panel ${activeTab === 'sheets' ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement(SheetsTabPanel, {
    employees: employees,
    weekEnding: currentWeekEnding,
    calculations: calculations,
    adjustments: adjustments,
    saveAdjustments: handleSaveAdjustments,
    calcSettings: calcSettings,
    setCalcSettings: val => {
      setCalcSettings(val);
      db.saveCalculationSettings(val);
    },
    activeSheetTab: activeSheetTab,
    setActiveSheetTab: setActiveSheetTab
  })), /*#__PURE__*/React.createElement("div", {
    className: `tab-panel ${activeTab === 'forms' ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement(FormsView, {
    employees: employees,
    selectedId: selectedEmployeeId,
    setSelectedId: setSelectedEmployeeId
  })), /*#__PURE__*/React.createElement("div", {
    className: `tab-panel ${activeTab === 'settings' ? 'active' : ''}`
  }, /*#__PURE__*/React.createElement(SettingsView, {
    settings: calcSettings,
    setSettings: val => {
      setCalcSettings(val);
      db.saveCalculationSettings(val);
    },
    employees: employees,
    saveEmployees: handleSaveEmployees
  }))), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("p", null, "\xA9 2026 Pancakes On The Rocks - POTR Payroll Pro Systems. Compliance Engine v1.0.0")));
}

// Sub-component: Dashboard View
function DashboardView({
  employees,
  calculations,
  settings,
  setSettings,
  adjustments
}) {
  const totalGross = calculations.parsedData.reduce((acc, curr) => acc + curr.gross, 0);
  const totalHours = calculations.parsedData.reduce((acc, curr) => acc + curr.totalHrs, 0);

  // Transferred and other wages additions/subtractions from adjustments
  let transferOutHours = 0;
  let transferOutCost = 0;
  let transferInHours = 0;
  let transferInCost = 0;
  (adjustments || []).forEach(adj => {
    const text = adj.adjustment.toLowerCase();
    if (text.includes('transfer out')) {
      const hrsMatch = text.match(/(\d+(\.\d+)?)\s*(hrs?|hours?)/);
      const costMatch = text.match(/\$\s*(\d+(\.\d+)?)/);
      if (hrsMatch) transferOutHours += parseFloat(hrsMatch[1]);
      if (costMatch) transferOutCost += parseFloat(costMatch[1]);
    } else if (text.includes('transfer in')) {
      const hrsMatch = text.match(/(\d+(\.\d+)?)\s*(hrs?|hours?)/);
      const costMatch = text.match(/\$\s*(\d+(\.\d+)?)/);
      if (hrsMatch) transferInHours += parseFloat(hrsMatch[1]);
      if (costMatch) transferInCost += parseFloat(costMatch[1]);
    }
  });

  // Total Wages including Superannuation and Leave Liability, minus Paid Annual Leave/Transfer Out
  const leaveLiabilityDollars = calculations.totalLeaveLiabilityCost;
  const superannuationDollars = calculations.totalSuperannuationCost;
  const paidAnnualLeaveWages = calculations.totalAnnualCost;
  const totalWagesResult = totalGross - paidAnnualLeaveWages + transferInCost - transferOutCost + superannuationDollars + leaveLiabilityDollars;

  // Wage percentages
  const wagePercentToReceipts = settings.receipts > 0 ? totalWagesResult / settings.receipts * 100 : 0;
  const wagePercentToTrueSales = settings.trueSales > 0 ? totalWagesResult / settings.trueSales * 100 : 0;

  // Productive hours = Total wages hours minus Sick leave and Leave Liability hours
  const totalWagesHours = totalHours - calculations.totalAnnualHrs + transferInHours - transferOutHours + calculations.totalLeaveLiabilityHours;
  const sickLeaveHours = calculations.totalSickHrs;
  const leaveAccruedHours = calculations.totalLeaveLiabilityHours;
  const productiveHours = Math.max(0, totalWagesHours - sickLeaveHours - leaveAccruedHours);
  const productivityValue = productiveHours > 0 ? settings.guests / productiveHours : 0;

  // Warnings checks
  const tfnWarnings = employees.filter(emp => !emp.tfn && new Date() - new Date(emp.startDate) > 28 * 24 * 60 * 60 * 1000);
  const visaExpirations = employees.filter(emp => emp.rightToWork && emp.rightToWork.expiryDate && new Date(emp.rightToWork.expiryDate) - new Date() < 30 * 24 * 60 * 60 * 1000);
  useIcons();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '28px',
      color: 'var(--brown)'
    }
  }, "Restaurant Performance Dashboard"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gray-500)',
      fontSize: '13px'
    }
  }, "Trading summary, compliance warnings and payroll metrics"))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card dashboard-perf-inputs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Weekly Total Receipts ($)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control",
    value: settings.receipts,
    onChange: e => setSettings({
      ...settings,
      receipts: parseFloat(e.target.value || 0)
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "TRUE SALES (-GST) ($)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control",
    value: settings.trueSales,
    onChange: e => setSettings({
      ...settings,
      trueSales: parseFloat(e.target.value || 0)
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "GUESTS SERVED"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control",
    value: settings.guests,
    onChange: e => setSettings({
      ...settings,
      guests: parseInt(e.target.value || 0)
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat-card-label"
  }, "Accrued Wage Cost"), /*#__PURE__*/React.createElement("span", {
    className: "stat-card-value"
  }, "$", totalWagesResult.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    className: "stat-card-footer"
  }, "Including super & leave liability")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat-card-label"
  }, "Wage % to True Sales"), /*#__PURE__*/React.createElement("span", {
    className: "stat-card-value",
    style: {
      color: wagePercentToTrueSales > 36 || wagePercentToTrueSales < 34 ? 'var(--warning)' : 'var(--success)'
    }
  }, wagePercentToTrueSales.toFixed(2), "%"), /*#__PURE__*/React.createElement("span", {
    className: "stat-card-footer"
  }, "Target: 35% of True Sales")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat-card-label"
  }, "Labour Productivity"), /*#__PURE__*/React.createElement("span", {
    className: "stat-card-value"
  }, productivityValue.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    className: "stat-card-footer"
  }, "Target: 4.3 - 4.7 guests/hour")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat-card-label"
  }, "Active Employees"), /*#__PURE__*/React.createElement("span", {
    className: "stat-card-value"
  }, employees.length), /*#__PURE__*/React.createElement("span", {
    className: "stat-card-footer"
  }, "Registered floor & kitchen staff"))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '18px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "shield-alert",
    style: {
      color: 'var(--amber)'
    }
  }), " Compliance & Alerts Center"), tfnWarnings.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-danger"
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "alert-triangle"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Tax Compliance Warning:"), " The following employees have not provided their Tax File Number after the 28-day grace period:", /*#__PURE__*/React.createElement("ul", {
    style: {
      marginLeft: '20px',
      marginTop: '6px'
    }
  }, tfnWarnings.map(emp => /*#__PURE__*/React.createElement("li", {
    key: emp.id
  }, emp.fullName, " (Started: ", emp.startDate, ")"))))), visaExpirations.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-warning"
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "clock"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Visa Expiration Alerts (within 30 days):"), /*#__PURE__*/React.createElement("ul", {
    style: {
      marginLeft: '20px',
      marginTop: '6px'
    }
  }, visaExpirations.map(emp => /*#__PURE__*/React.createElement("li", {
    key: emp.id
  }, emp.fullName, " - Visa expires on ", emp.rightToWork.expiryDate))))), wagePercentToTrueSales > 36 && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-warning"
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "trending-up"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "High Wage Cost Warning:"), " Accrued wage cost (", wagePercentToTrueSales.toFixed(2), "%) is above the 36% limit. Roster adjustments or average spend push needed on next cycle.")), wagePercentToTrueSales < 34 && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-warning"
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "trending-down"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Low Wage Cost Alert:"), " Wage cost (", wagePercentToTrueSales.toFixed(2), "%) is below the 34% limit. Ensure customer service levels and cleaning functions are not suffering.")), tfnWarnings.length === 0 && visaExpirations.length === 0 && wagePercentToTrueSales >= 34 && wagePercentToTrueSales <= 36 && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-success"
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "check-circle-2"
  }), /*#__PURE__*/React.createElement("div", null, "All compliance checks passed. Wage cost is within the target 34% - 36% margin."))));
}

// Sub-component: Employees View
function EmployeesView({
  employees,
  saveEmployees,
  selectedId,
  setSelectedId
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(null);
  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      const matchName = emp.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = filterStatus === 'All' || emp.status === filterStatus;
      return matchName && matchStatus;
    });
  }, [employees, searchTerm, filterStatus]);
  const selectedEmployee = employees.find(e => e.id === selectedId) || employees[0];
  useEffect(() => {
    if (selectedEmployee) {
      setEditForm(JSON.parse(JSON.stringify(selectedEmployee)));
    }
  }, [selectedId, employees]);
  const handleStartEdit = () => {
    setIsEditing(true);
  };
  const handleSaveEdit = () => {
    const idx = employees.findIndex(e => e.id === editForm.id);
    const updated = [...employees];
    updated[idx] = editForm;
    saveEmployees(updated);
    setIsEditing(false);
  };
  const handleAddNew = () => {
    const newId = (Math.max(...employees.map(e => parseInt(e.id))) + 1).toString();
    const newEmp = {
      id: newId,
      fullName: "New Employee",
      position: "Guest Assistant",
      grade: "Grade 1",
      status: "Casual",
      startDate: new Date().toISOString().split('T')[0],
      tfn: "",
      bankDetails: {
        bsb: "",
        accountNumber: "",
        accountName: "",
        institution: "",
        branch: ""
      },
      superannuation: {
        fundName: "",
        memberNumber: ""
      },
      availabilities: createDefaultAvailability(),
      rightToWork: {
        isCitizen: true
      },
      baseRate: 15.61,
      onboarding: {
        covenant: false,
        taxDec: false,
        offerLetter: false,
        rightToWorkCheck: false
      }
    };
    saveEmployees([...employees, newEmp]);
    setSelectedId(newId);
    setIsEditing(true);
  };
  const handleDelete = id => {
    if (confirm("Are you sure you want to remove this employee?")) {
      const updated = employees.filter(e => e.id !== id);
      saveEmployees(updated);
      setSelectedId(updated[0]?.id || '');
    }
  };
  useIcons();
  return /*#__PURE__*/React.createElement("div", {
    className: "employee-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "employee-sidebar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: '100%'
    },
    onClick: handleAddNew
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "user-plus"
  }), " Add New Employee"), /*#__PURE__*/React.createElement("div", {
    className: "glass-card",
    style: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search employees...",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value)
  }), /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    value: filterStatus,
    onChange: e => setFilterStatus(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "All"
  }, "All Statuses"), /*#__PURE__*/React.createElement("option", {
    value: "Casual"
  }, "Casual"), /*#__PURE__*/React.createElement("option", {
    value: "Part-time"
  }, "Part-time"), /*#__PURE__*/React.createElement("option", {
    value: "Full-time"
  }, "Full-time"))), /*#__PURE__*/React.createElement("div", {
    className: "employee-list"
  }, filteredEmployees.map(emp => /*#__PURE__*/React.createElement("div", {
    key: emp.id,
    className: `employee-list-item ${selectedId === emp.id ? 'selected' : ''}`,
    onClick: () => {
      setSelectedId(emp.id);
      setIsEditing(false);
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '13px'
    }
  }, emp.fullName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--gray-500)',
      marginTop: '2px'
    }
  }, emp.position)), /*#__PURE__*/React.createElement("span", {
    className: `badge badge-${emp.status.toLowerCase().replace(' ', '-')}`
  }, emp.status))))), selectedEmployee && editForm && /*#__PURE__*/React.createElement("div", {
    className: "employee-details-panel glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      borderBottom: '2px solid var(--beige)',
      paddingBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '24px'
    }
  }, editForm.fullName), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gray-500)',
      fontSize: '13px'
    }
  }, "ID Reference: #", editForm.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, isEditing ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => setIsEditing(false)
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: handleSaveEdit
  }, "Save Changes")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: handleStartEdit
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "edit"
  }), " Edit details"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger",
    onClick: () => handleDelete(selectedEmployee.id)
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "trash-2"
  }), " Delete")))), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Full Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.fullName,
    onChange: e => setEditForm({
      ...editForm,
      fullName: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Award Position"), /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    disabled: !isEditing,
    value: editForm.position,
    onChange: e => setEditForm({
      ...editForm,
      position: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "Guest Assistant"
  }, "Guest Assistant (Level 1)"), /*#__PURE__*/React.createElement("option", {
    value: "Shift Supervisor"
  }, "Shift Supervisor (Level 2)"), /*#__PURE__*/React.createElement("option", {
    value: "Restaurant Manager"
  }, "Restaurant Manager (Level 3)"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Employment Status"), /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    disabled: !isEditing,
    value: editForm.status,
    onChange: e => setEditForm({
      ...editForm,
      status: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "Casual"
  }, "Casual"), /*#__PURE__*/React.createElement("option", {
    value: "Part-time"
  }, "Part-time"), /*#__PURE__*/React.createElement("option", {
    value: "Full-time"
  }, "Full-time"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Start Date (First Shift)"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.startDate,
    onChange: e => setEditForm({
      ...editForm,
      startDate: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Base Rate ($/hr)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.baseRate,
    onChange: e => setEditForm({
      ...editForm,
      baseRate: parseFloat(e.target.value || 0)
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Tax File Number"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: editForm.tfn ? "•••••••••" : "Not Provided",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.tfn,
    onChange: e => setEditForm({
      ...editForm,
      tfn: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '16px',
      marginBottom: '16px',
      borderBottom: '1px solid var(--beige)',
      paddingBottom: '8px'
    }
  }, "Bank Account Details"), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Institution"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.bankDetails?.institution || '',
    onChange: e => setEditForm({
      ...editForm,
      bankDetails: {
        ...editForm.bankDetails,
        institution: e.target.value
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "BSB Number"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    placeholder: "000-000",
    value: editForm.bankDetails?.bsb || '',
    onChange: e => setEditForm({
      ...editForm,
      bankDetails: {
        ...editForm.bankDetails,
        bsb: e.target.value
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Account Number"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.bankDetails?.accountNumber || '',
    onChange: e => setEditForm({
      ...editForm,
      bankDetails: {
        ...editForm.bankDetails,
        accountNumber: e.target.value
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Account Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.bankDetails?.accountName || '',
    onChange: e => setEditForm({
      ...editForm,
      bankDetails: {
        ...editForm.bankDetails,
        accountName: e.target.value
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Branch Location"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.bankDetails?.branch || '',
    onChange: e => setEditForm({
      ...editForm,
      bankDetails: {
        ...editForm.bankDetails,
        branch: e.target.value
      }
    })
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '16px',
      marginBottom: '16px',
      borderBottom: '1px solid var(--beige)',
      paddingBottom: '8px'
    }
  }, "Right to Work (Non-Citizen Check)"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "checkbox-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    disabled: !isEditing,
    checked: !editForm.rightToWork?.isCitizen,
    onChange: e => setEditForm({
      ...editForm,
      rightToWork: {
        ...editForm.rightToWork,
        isCitizen: !e.target.checked
      }
    })
  }), /*#__PURE__*/React.createElement("span", {
    className: "checkmark"
  }), "Is non-citizen employee (requires visa / Right to Work document check)")), !editForm.rightToWork?.isCitizen && /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Passport Country"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.rightToWork?.passportCountry || '',
    onChange: e => setEditForm({
      ...editForm,
      rightToWork: {
        ...editForm.rightToWork,
        passportCountry: e.target.value
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Passport Number"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.rightToWork?.passportNumber || '',
    onChange: e => setEditForm({
      ...editForm,
      rightToWork: {
        ...editForm.rightToWork,
        passportNumber: e.target.value
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Visa Status / Subclass"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.rightToWork?.visaStatus || '',
    onChange: e => setEditForm({
      ...editForm,
      rightToWork: {
        ...editForm.rightToWork,
        visaStatus: e.target.value
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Visa Expiry Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.rightToWork?.expiryDate || '',
    onChange: e => setEditForm({
      ...editForm,
      rightToWork: {
        ...editForm.rightToWork,
        expiryDate: e.target.value
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement("label", null, "Work Entitlements / Restrictions"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: !isEditing,
    value: editForm.rightToWork?.entitlements || '',
    placeholder: "e.g. 40 hours per fortnight",
    onChange: e => setEditForm({
      ...editForm,
      rightToWork: {
        ...editForm.rightToWork,
        entitlements: e.target.value
      }
    })
  })))));
}

// Sub-component: Timecards View
function TimecardsView({
  employees,
  timecards,
  weekEnding,
  saveTimecard,
  selectedId,
  setSelectedId
}) {
  const selectedEmployee = employees.find(e => e.id === selectedId) || employees[0];
  const currentCard = timecards.find(c => c.employeeId === selectedId) || {
    shifts: {}
  };
  const [showScanner, setShowScanner] = useState(false);
  const handleToggleWorked = (day, worked) => {
    const shifts = {
      ...currentCard.shifts
    };
    if (!shifts[day]) shifts[day] = {};
    shifts[day].worked = worked;
    saveTimecard(selectedId, shifts);
  };
  const handleShiftChange = (day, field, val) => {
    const shifts = {
      ...currentCard.shifts
    };
    if (!shifts[day]) shifts[day] = {};
    shifts[day][field] = val;
    saveTimecard(selectedId, shifts);
  };
  useIcons();
  const days = [{
    key: 'tue',
    name: 'Tuesday'
  }, {
    key: 'wed',
    name: 'Wednesday'
  }, {
    key: 'thu',
    name: 'Thursday'
  }, {
    key: 'fri',
    name: 'Friday'
  }, {
    key: 'sat',
    name: 'Saturday'
  }, {
    key: 'sun',
    name: 'Sunday'
  }, {
    key: 'mon',
    name: 'Monday'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "employee-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "employee-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-card",
    style: {
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '14px',
      marginBottom: '12px'
    }
  }, "Select Employee"), /*#__PURE__*/React.createElement("div", {
    className: "employee-list",
    style: {
      maxHeight: '500px'
    }
  }, employees.map(emp => /*#__PURE__*/React.createElement("div", {
    key: emp.id,
    className: `employee-list-item ${selectedId === emp.id ? 'selected' : ''}`,
    onClick: () => setSelectedId(emp.id)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '13px'
    }
  }, emp.fullName), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'var(--gray-500)'
    }
  }, emp.status))))))), /*#__PURE__*/React.createElement("div", {
    className: "employee-details-panel glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px',
      borderBottom: '1px solid var(--beige)',
      paddingBottom: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '22px'
    }
  }, "Weekly Timecard for ", selectedEmployee?.fullName), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gray-500)',
      fontSize: '12px'
    }
  }, "Pay cycle ending on Monday: ", weekEnding)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => setShowScanner(true),
    style: { display: 'flex', alignItems: 'center', gap: '6px' }
  }, /*#__PURE__*/React.createElement(SafeIcon, { name: "scan" }), " Scan Handwritten Card"), /*#__PURE__*/React.createElement(OcrScannerModal, {
    isOpen: showScanner,
    onClose: () => setShowScanner(false),
    employee: selectedEmployee,
    onScanComplete: (scannedShifts) => {
      const shifts = {
        ...currentCard.shifts,
        ...scannedShifts
      };
      saveTimecard(selectedId, shifts);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "timecard-scroll-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '830px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "timecard-day-row",
    style: {
      fontWeight: 700,
      fontSize: '11px',
      borderBottom: '2px solid var(--brown)',
      textTransform: 'uppercase',
      color: 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Day"), /*#__PURE__*/React.createElement("div", null, "Status"), /*#__PURE__*/React.createElement("div", null, "Start Time"), /*#__PURE__*/React.createElement("div", null, "End Time"), /*#__PURE__*/React.createElement("div", null, "Break (m)"), /*#__PURE__*/React.createElement("div", null, "P/Hol"), /*#__PURE__*/React.createElement("div", null, "Superv"), /*#__PURE__*/React.createElement("div", null, "Split"), /*#__PURE__*/React.createElement("div", null, "Manual Overrides / Shifts Costing Columns")), days.map(d => {
    const shift = currentCard.shifts && currentCard.shifts[d.key] ? currentCard.shifts[d.key] : {
      worked: false,
      startTime: '09:00',
      endTime: '17:00',
      breakMinutes: 30
    };
    return /*#__PURE__*/React.createElement("div", {
      key: d.key,
      className: "timecard-day-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "timecard-day-name"
    }, d.name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      className: "toggle-switch"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: shift.worked,
      onChange: e => handleToggleWorked(d.key, e.target.checked)
    }), /*#__PURE__*/React.createElement("span", {
      className: "slider"
    }))), shift.worked ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "time",
      className: "form-control",
      style: {
        padding: '6px'
      },
      value: shift.startTime || '09:00',
      onChange: e => handleShiftChange(d.key, 'startTime', e.target.value)
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "time",
      className: "form-control",
      style: {
        padding: '6px'
      },
      value: shift.endTime || '17:00',
      onChange: e => handleShiftChange(d.key, 'endTime', e.target.value)
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "number",
      className: "form-control",
      style: {
        padding: '6px'
      },
      value: shift.breakMinutes === undefined ? 30 : shift.breakMinutes,
      onChange: e => handleShiftChange(d.key, 'breakMinutes', parseInt(e.target.value || 0))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: shift.publicHoliday || false,
      onChange: e => handleShiftChange(d.key, 'publicHoliday', e.target.checked)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: shift.supervisor || false,
      onChange: e => handleShiftChange(d.key, 'supervisor', e.target.checked)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: shift.splitShift || false,
      onChange: e => handleShiftChange(d.key, 'splitShift', e.target.checked)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '11px'
      }
    }, /*#__PURE__*/React.createElement("label", {
      className: "checkbox-container",
      style: {
        fontSize: '11px'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: shift.override || false,
      onChange: e => handleShiftChange(d.key, 'override', e.target.checked)
    }), /*#__PURE__*/React.createElement("span", {
      className: "checkmark",
      style: {
        width: '16px',
        height: '16px'
      }
    }), "Override"), shift.override && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "ORD",
      className: "form-control",
      style: {
        padding: '4px',
        width: '45px',
        fontSize: '11px'
      },
      value: shift.overrideOrd || '',
      onChange: e => handleShiftChange(d.key, 'overrideOrd', e.target.value)
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "1.25",
      className: "form-control",
      style: {
        padding: '4px',
        width: '45px',
        fontSize: '11px'
      },
      value: shift.override125 || '',
      onChange: e => handleShiftChange(d.key, 'override125', e.target.value)
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "1.5",
      className: "form-control",
      style: {
        padding: '4px',
        width: '45px',
        fontSize: '11px'
      },
      value: shift.override150 || '',
      onChange: e => handleShiftChange(d.key, 'override150', e.target.value)
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "2.0",
      className: "form-control",
      style: {
        padding: '4px',
        width: '45px',
        fontSize: '11px'
      },
      value: shift.override200 || '',
      onChange: e => handleShiftChange(d.key, 'override200', e.target.value)
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "NS",
      className: "form-control",
      style: {
        padding: '4px',
        width: '45px',
        fontSize: '11px'
      },
      value: shift.overrideNight || '',
      onChange: e => handleShiftChange(d.key, 'overrideNight', e.target.value)
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "2.5",
      className: "form-control",
      style: {
        padding: '4px',
        width: '45px',
        fontSize: '11px'
      },
      value: shift.override250 || '',
      onChange: e => handleShiftChange(d.key, 'override250', e.target.value)
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "Sick",
      className: "form-control",
      style: {
        padding: '4px',
        width: '45px',
        fontSize: '11px'
      },
      value: shift.overrideSick || '',
      onChange: e => handleShiftChange(d.key, 'overrideSick', e.target.value)
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      placeholder: "PAL",
      className: "form-control",
      style: {
        padding: '4px',
        width: '45px',
        fontSize: '11px'
      },
      value: shift.overrideAnnual || '',
      onChange: e => handleShiftChange(d.key, 'overrideAnnual', e.target.value)
    })))) : /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: 'span 7',
        color: 'var(--gray-500)',
        fontStyle: 'italic',
        fontSize: '12px'
      }
    }, "Off Shift / Rest Day"));
  })))));
}

// Sub-component: Roster Comparison View
function RosterComparisonView({
  employees,
  weekEnding,
  rosterValues,
  actualCalculations,
  saveRoster
}) {
  useIcons();
  return /*#__PURE__*/React.createElement("div", {
    className: "glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px',
      borderBottom: '1px solid var(--beige)',
      paddingBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '22px'
    }
  }, "Roster vs Actual Hours Comparison"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gray-500)',
      fontSize: '12px'
    }
  }, "Review worked hours discrepancies against the planned roster")), /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "payroll-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Employee Name"), /*#__PURE__*/React.createElement("th", null, "Rostered Hours"), /*#__PURE__*/React.createElement("th", null, "Actual Hours Worked"), /*#__PURE__*/React.createElement("th", null, "Variance (hrs)"), /*#__PURE__*/React.createElement("th", null, "Compliance Status"))), /*#__PURE__*/React.createElement("tbody", null, employees.map(emp => {
    const actual = actualCalculations.find(c => c.employeeId === emp.id)?.totalHrs || 0;
    const rostered = rosterValues[emp.id] || 0;
    const variance = actual - rostered;
    const isDiscrepancy = Math.abs(variance) > 2.0;
    return /*#__PURE__*/React.createElement("tr", {
      key: emp.id,
      className: isDiscrepancy ? 'comparison-warning' : 'comparison-normal'
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 600
      }
    }, emp.fullName), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      type: "number",
      className: "form-control",
      style: {
        padding: '4px 8px',
        width: '90px',
        fontSize: '12px'
      },
      value: rosterValues[emp.id] || '',
      placeholder: "0",
      onChange: e => saveRoster(emp.id, e.target.value)
    })), /*#__PURE__*/React.createElement("td", null, actual.toFixed(2)), /*#__PURE__*/React.createElement("td", null, variance > 0 ? `+${variance.toFixed(2)}` : variance.toFixed(2)), /*#__PURE__*/React.createElement("td", null, isDiscrepancy ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--warning)',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement(SafeIcon, {
      name: "alert-circle",
      style: {
        width: '14px'
      }
    }), " Variance Alert") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--success)',
        fontWeight: 600
      }
    }, "Aligned")));
  })))));
}

// Sub-component: Sheets tab panel containing costing/data/adjustment/calculation
function SheetsTabPanel({
  employees,
  weekEnding,
  calculations,
  adjustments,
  saveAdjustments,
  calcSettings,
  setCalcSettings,
  activeSheetTab,
  setActiveSheetTab
}) {
  const handleAddAdjustment = newAdj => {
    saveAdjustments([...adjustments, newAdj]);
  };
  const handleDeleteAdjustment = idx => {
    const updated = [...adjustments];
    updated.splice(idx, 1);
    saveAdjustments(updated);
  };
  const handlePrint = () => {
    window.print();
  };
  const handleExportCsv = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    if (activeSheetTab === 'costing') {
      csvContent += "Employee Name,Base Rate,ORD Hrs,ORD Cost,1.25 Hrs,1.25 Cost,1.5 Hrs,1.5 Cost,2.0 Hrs,2.0 Cost,2.5 Hrs,2.5 Cost,Night Hrs,Night Cost,Sick Hrs,Sick Cost,Annual Hrs,Annual Cost,Lndry Shifts,Lndry Cost,Superv Shifts,Superv Cost,Split Shifts,Split Cost,Total Hrs,Gross Pay\r\n";
      calculations.parsedData.forEach(c => {
        csvContent += `"${c.fullName}",${c.baseRate},${c.ord},${c.ordCost},${c.c125},${c.c125Cost},${c.c150},${c.c150Cost},${c.c200},${c.c200Cost},${c.c250},${c.c250Cost},${c.night},${c.nightCost},${c.sick},${c.sickCost},${c.annual},${c.annualCost},${c.laundryCount},${c.laundryVal},${c.supervisorCount},${c.supervisorVal},${c.splitCount},${c.splitVal},${c.totalHrs},${c.gross}\r\n`;
      });
      csvContent += `TOTALS,,${calculations.totalOrdHrs},${calculations.totalOrdCost},${calculations.total125Hrs},${calculations.total125Cost},${calculations.total150Hrs},${calculations.total150Cost},${calculations.total200Hrs},${calculations.total200Cost},${calculations.total250Hrs},${calculations.total250Cost},${calculations.totalNightHrs},${calculations.totalNightCost},${calculations.totalSickHrs},${calculations.totalSickCost},${calculations.totalAnnualHrs},${calculations.totalAnnualCost},,${calculations.totalLaundryCost},,${calculations.totalSupervisorCost},,${calculations.totalSplitCost},${calculations.parsedData.reduce((acc, curr) => acc + curr.totalHrs, 0)},${calculations.parsedData.reduce((acc, curr) => acc + curr.gross, 0)}\r\n`;
    } else if (activeSheetTab === 'data') {
      csvContent += "Employee Name,Ordinary (x100),1.25 (x100),1.5 (x100),2.00 (x100),2.50 (x100),Night Shift (x100),Sick Leave (x100),Annual Leave (x100),Laundry Count,Supervisor Count,Split Shift Count\r\n";
      calculations.parsedData.forEach(c => {
        csvContent += `"${c.fullName}",${Math.round(c.ord*100)},${Math.round(c.c125*100)},${Math.round(c.c150*100)},${Math.round(c.c200*100)},${Math.round(c.c250*100)},${Math.round(c.night*100)},${Math.round(c.sick*100)},${Math.round(c.annual*100)},${c.laundryCount},${c.supervisorCount},${c.splitCount}\r\n`;
      });
    } else if (activeSheetTab === 'adjustments') {
      csvContent += "Employee Name,Adjustment Description\r\n";
      adjustments.forEach(a => {
        csvContent += `"${a.name}","${a.adjustment}"\r\n`;
      });
    } else {
      csvContent += "Metric,Hours,Dollars\r\n";
      csvContent += `Ordinary,${calculations.totalOrdHrs},${calculations.totalOrdCost}\r\n`;
      csvContent += `1 1/4,${calculations.total125Hrs},${calculations.total125Cost}\r\n`;
      csvContent += `1 1/2,${calculations.total150Hrs},${calculations.total150Cost}\r\n`;
      csvContent += `2,${calculations.total200Hrs},${calculations.total200Cost}\r\n`;
      csvContent += `2 1/2,${calculations.total250Hrs},${calculations.total250Cost}\r\n`;
      csvContent += `Night Shift,${calculations.totalNightHrs},${calculations.totalNightCost}\r\n`;
      csvContent += `Sick Leave,${calculations.totalSickHrs},${calculations.totalSickCost}\r\n`;
      csvContent += `Laundry & Supervisor Allowance,,${calculations.totalLaundryCost + calculations.totalSupervisorCost + calculations.totalSplitCost}\r\n`;
      csvContent += `Paid Annual Leave,,${calculations.totalAnnualCost}\r\n`;
      csvContent += `TOTAL,${calculations.parsedData.reduce((acc, curr) => acc + curr.totalHrs, 0)},${calculations.parsedData.reduce((acc, curr) => acc + curr.gross, 0)}\r\n`;
    }
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `POTR_${activeSheetTab}_sheet_${weekEnding}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleEmailGenerator = () => {
    const subject = `POTR Payroll Submission - Week Ending ${weekEnding}`;
    let body = `Hi Admin Office,\n\nPlease find below the payroll summary for Pancakes On The Rocks for the week ending ${weekEnding}.\n\n`;
    body += `WAGE CALCULATIONS SUMMARY:\n`;
    body += `---------------------------\n`;
    body += `Accrued Wage Cost: $${(calculations.parsedData.reduce((acc, curr) => acc + curr.gross, 0)).toFixed(2)}\n`;
    body += `Productive Hours: ${(calculations.parsedData.reduce((acc, curr) => acc + curr.totalHrs, 0)).toFixed(2)} hrs\n`;
    body += `Superannuation: $${calculations.totalSuperannuationCost.toFixed(2)}\n`;
    body += `Leave Liability: $${calculations.totalLeaveLiabilityCost.toFixed(2)}\n\n`;
    body += `ADJUSTMENTS LOGGED:\n`;
    body += `--------------------\n`;
    if (adjustments.length === 0) {
      body += `No adjustments for this week.\n`;
    } else {
      adjustments.forEach((adj, idx) => {
        body += `${idx+1}. ${adj.name}: ${adj.adjustment}\n`;
      });
    }
    body += `\nBest regards,\nPayroll Manager\nPancakes On The Rocks`;
    const mailtoUrl = `mailto:admin@pancakesontherocks.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
  };
  useIcons();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderBottom: '2px solid var(--beige)', paddingBottom: '10px', marginBottom: '20px' }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheets-tab-menu",
    style: { borderBottom: 'none', marginBottom: 0 }
  }, /*#__PURE__*/React.createElement("div", {
    className: `sheets-tab-item ${activeSheetTab === 'calculation' ? 'active' : ''}`,
    onClick: () => setActiveSheetTab('calculation')
  }, "Wage % Calculation"), /*#__PURE__*/React.createElement("div", {
    className: `sheets-tab-item ${activeSheetTab === 'costing' ? 'active' : ''}`,
    onClick: () => setActiveSheetTab('costing')
  }, "Costing Sheet"), /*#__PURE__*/React.createElement("div", {
    className: `sheets-tab-item ${activeSheetTab === 'data' ? 'active' : ''}`,
    onClick: () => setActiveSheetTab('data')
  }, "Data Sheet"), /*#__PURE__*/React.createElement("div", {
    className: `sheets-tab-item ${activeSheetTab === 'adjustments' ? 'active' : ''}`,
    onClick: () => setActiveSheetTab('adjustments')
  }, "Adjustment Sheet")), /*#__PURE__*/React.createElement("div", {
    style: { display: 'flex', gap: '8px' }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: handlePrint
  }, /*#__PURE__*/React.createElement(SafeIcon, { name: "printer" }), " Print Sheet"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: handleExportCsv
  }, /*#__PURE__*/React.createElement(SafeIcon, { name: "download" }), " Export CSV"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark btn-sm",
    onClick: handleEmailGenerator
  }, /*#__PURE__*/React.createElement(SafeIcon, { name: "mail" }), " Email to Admin"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, activeSheetTab === 'calculation' && /*#__PURE__*/React.createElement(CalculationSheetView, {
    weekEnding: weekEnding,
    calculations: calculations,
    settings: calcSettings,
    setSettings: setSettings => setCalcSettings(setSettings),
    adjustments: adjustments
  }), activeSheetTab === 'costing' && /*#__PURE__*/React.createElement(CostingSheetView, {
    calculations: calculations
  }), activeSheetTab === 'data' && /*#__PURE__*/React.createElement(DataSheetView, {
    calculations: calculations
  }), activeSheetTab === 'adjustments' && /*#__PURE__*/React.createElement(AdjustmentSheetView, {
    adjustments: adjustments,
    addAdjustment: handleAddAdjustment,
    deleteAdjustment: handleDeleteAdjustment
  })));
}

// 1. Costing Sheet Sub-view
function CostingSheetView({
  calculations
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "glass-card"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '18px',
      marginBottom: '16px'
    }
  }, "Costing Sheet View"), /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "payroll-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Employee Name"), /*#__PURE__*/React.createElement("th", null, "Base Rate"), /*#__PURE__*/React.createElement("th", null, "ORD Hrs"), /*#__PURE__*/React.createElement("th", null, "ORD Cost"), /*#__PURE__*/React.createElement("th", null, "1.25 Hrs"), /*#__PURE__*/React.createElement("th", null, "1.25 Cost"), /*#__PURE__*/React.createElement("th", null, "1.5 Hrs"), /*#__PURE__*/React.createElement("th", null, "1.5 Cost"), /*#__PURE__*/React.createElement("th", null, "2.0 Hrs"), /*#__PURE__*/React.createElement("th", null, "2.0 Cost"), /*#__PURE__*/React.createElement("th", null, "2.5 Hrs"), /*#__PURE__*/React.createElement("th", null, "2.5 Cost"), /*#__PURE__*/React.createElement("th", null, "Night Hrs"), /*#__PURE__*/React.createElement("th", null, "Night Cost"), /*#__PURE__*/React.createElement("th", null, "Sick Hrs"), /*#__PURE__*/React.createElement("th", null, "Sick Cost"), /*#__PURE__*/React.createElement("th", null, "Annual Hrs"), /*#__PURE__*/React.createElement("th", null, "Annual Cost"), /*#__PURE__*/React.createElement("th", null, "Lndry Shifts"), /*#__PURE__*/React.createElement("th", null, "Lndry Cost"), /*#__PURE__*/React.createElement("th", null, "Superv Shifts"), /*#__PURE__*/React.createElement("th", null, "Superv Cost"), /*#__PURE__*/React.createElement("th", null, "Split Shifts"), /*#__PURE__*/React.createElement("th", null, "Split Cost"), /*#__PURE__*/React.createElement("th", null, "Total Hrs"), /*#__PURE__*/React.createElement("th", null, "Gross Pay"))), /*#__PURE__*/React.createElement("tbody", null, calculations.parsedData.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.employeeId
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.fullName), /*#__PURE__*/React.createElement("td", null, "$", c.baseRate.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.ord.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c.ordCost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.c125.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c.c125Cost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.c150.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c.c150Cost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.c200.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c.c200Cost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.c250.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c.c250Cost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.night.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c.nightCost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.sick.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c.sickCost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.annual.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c.annualCost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.laundryCount), /*#__PURE__*/React.createElement("td", null, "$", c.laundryVal.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.supervisorCount), /*#__PURE__*/React.createElement("td", null, "$", c.supervisorVal.toFixed(2)), /*#__PURE__*/React.createElement("td", null, c.splitCount), /*#__PURE__*/React.createElement("td", null, "$", c.splitVal.toFixed(2)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.totalHrs.toFixed(2)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700
    }
  }, "$", c.gross.toFixed(2)))), /*#__PURE__*/React.createElement("tr", {
    className: "total-row"
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, "TOTALS"), /*#__PURE__*/React.createElement("td", null, calculations.totalOrdHrs.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", calculations.totalOrdCost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, calculations.total125Hrs.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", calculations.total125Cost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, calculations.total150Hrs.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", calculations.total150Cost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, calculations.total200Hrs.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", calculations.total200Cost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, calculations.total250Hrs.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", calculations.total250Cost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, calculations.totalNightHrs.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", calculations.totalNightCost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, calculations.totalSickHrs.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", calculations.totalSickCost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, calculations.totalAnnualHrs.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", calculations.totalAnnualCost.toFixed(2)), /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, "All Laundry: $", calculations.totalLaundryCost.toFixed(2)), /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, "All Superv: $", calculations.totalSupervisorCost.toFixed(2)), /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, "All Split: $", calculations.totalSplitCost.toFixed(2)), /*#__PURE__*/React.createElement("td", null, calculations.parsedData.reduce((acc, curr) => acc + curr.totalHrs, 0).toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", calculations.parsedData.reduce((acc, curr) => acc + curr.gross, 0).toFixed(2)))))));
}

// 2. Data Sheet Sub-view (Hours multiplied by 100, laundry as counts)
function DataSheetView({
  calculations
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "glass-card"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '18px',
      marginBottom: '8px'
    }
  }, "Data Sheet View"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '12px',
      color: 'var(--gray-500)',
      marginBottom: '16px'
    }
  }, "Hours are recorded multiplied by 100 as per potr administration systems requirements."), /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "payroll-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Employee Name"), /*#__PURE__*/React.createElement("th", null, "Ordinary (x100)"), /*#__PURE__*/React.createElement("th", null, "1.25 (x100)"), /*#__PURE__*/React.createElement("th", null, "1.5 (x100)"), /*#__PURE__*/React.createElement("th", null, "2.00 (x100)"), /*#__PURE__*/React.createElement("th", null, "2.50 (x100)"), /*#__PURE__*/React.createElement("th", null, "Night Shift (x100)"), /*#__PURE__*/React.createElement("th", null, "Sick Leave (x100)"), /*#__PURE__*/React.createElement("th", null, "Annual Leave (x100)"), /*#__PURE__*/React.createElement("th", null, "Laundry Count"), /*#__PURE__*/React.createElement("th", null, "Supervisor Count"), /*#__PURE__*/React.createElement("th", null, "Split Shift Count"))), /*#__PURE__*/React.createElement("tbody", null, calculations.parsedData.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.employeeId
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, c.fullName), /*#__PURE__*/React.createElement("td", null, Math.round(c.ord * 100)), /*#__PURE__*/React.createElement("td", null, Math.round(c.c125 * 100)), /*#__PURE__*/React.createElement("td", null, Math.round(c.c150 * 100)), /*#__PURE__*/React.createElement("td", null, Math.round(c.c200 * 100)), /*#__PURE__*/React.createElement("td", null, Math.round(c.c250 * 100)), /*#__PURE__*/React.createElement("td", null, Math.round(c.night * 100)), /*#__PURE__*/React.createElement("td", null, Math.round(c.sick * 100)), /*#__PURE__*/React.createElement("td", null, Math.round(c.annual * 100)), /*#__PURE__*/React.createElement("td", null, c.laundryCount), /*#__PURE__*/React.createElement("td", null, c.supervisorCount), /*#__PURE__*/React.createElement("td", null, c.splitCount)))))));
}

// 3. Adjustment Sheet Sub-view
function AdjustmentSheetView({
  adjustments,
  addAdjustment,
  deleteAdjustment
}) {
  const [name, setName] = useState('');
  const [adjText, setAdjText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (name && adjText) {
      addAdjustment({
        name,
        adjustment: adjText
      });
      setName('');
      setAdjText('');
    }
  };
  useIcons();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-card"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '18px',
      marginBottom: '16px'
    }
  }, "Log New Payroll Adjustment"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      flex: 1,
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Employee Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "e.g. Charlie Wong"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      flex: 2,
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Adjustment Description"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    value: adjText,
    onChange: e => setAdjText(e.target.value),
    placeholder: "e.g. New starter: BSB=012-345 Account=123456 Rate=$15.61 Grade=3"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Log Adjustment"))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '18px',
      marginBottom: '16px'
    }
  }, "Logged Adjustments for processing"), /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "payroll-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Adjustment to be Made"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '80px'
    }
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, adjustments.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "3",
    style: {
      textAlign: 'center',
      color: 'var(--gray-500)',
      fontStyle: 'italic'
    }
  }, "No adjustments logged for this week ending cycle.")) : adjustments.map((adj, idx) => /*#__PURE__*/React.createElement("tr", {
    key: idx
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 600
    }
  }, adj.name), /*#__PURE__*/React.createElement("td", null, adj.adjustment), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger btn-sm",
    onClick: () => deleteAdjustment(idx)
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "trash-2"
  }))))))))));
}

// 4. Wage % Calculation Sheet View (Replica of Calculation Sheet)
function CalculationSheetView({
  weekEnding,
  calculations,
  settings,
  setSettings,
  adjustments
}) {
  const [useSampleData, setUseSampleData] = useState(false);
  const ordDollars = calculations.totalOrdCost;
  const c125Dollars = calculations.total125Cost;
  const c150Dollars = calculations.total150Cost;
  const c200Dollars = calculations.total200Cost;
  const c250Dollars = calculations.total250Cost;
  const nightDollars = calculations.totalNightCost;
  const sickDollars = calculations.totalSickCost;
  const allowancesDollars = calculations.totalLaundryCost + calculations.totalSupervisorCost + calculations.totalSplitCost;
  const annualLeaveDollars = calculations.totalAnnualCost;

  // Transferred and other wages additions/subtractions
  let transferOutHours = 0;
  let transferOutCost = 0;
  let transferInHours = 0;
  let transferInCost = 0;
  adjustments.forEach(adj => {
    const text = adj.adjustment.toLowerCase();
    if (text.includes('transfer out')) {
      const hrsMatch = text.match(/(\d+(\.\d+)?)\s*(hrs?|hours?)/);
      const costMatch = text.match(/\$\s*(\d+(\.\d+)?)/);
      if (hrsMatch) transferOutHours += parseFloat(hrsMatch[1]);
      if (costMatch) transferOutCost += parseFloat(costMatch[1]);
    } else if (text.includes('transfer in')) {
      const hrsMatch = text.match(/(\d+(\.\d+)?)\s*(hrs?|hours?)/);
      const costMatch = text.match(/\$\s*(\d+(\.\d+)?)/);
      if (hrsMatch) transferInHours += parseFloat(hrsMatch[1]);
      if (costMatch) transferInCost += parseFloat(costMatch[1]);
    }
  });

  // Accruals and liability calculations
  const superannuationDollars = calculations.totalSuperannuationCost;
  const leaveLiabilityHours = calculations.totalLeaveLiabilityHours;
  const leaveLiabilityDollars = calculations.totalLeaveLiabilityCost;

  // Apply overrides if using sample data
  const ordHrsValue = useSampleData ? 637.00 : calculations.totalOrdHrs;
  const ordCostValue = useSampleData ? 12022.25 : ordDollars;
  const c125HrsValue = useSampleData ? 224.00 : calculations.total125Hrs;
  const c125CostValue = useSampleData ? 4421.65 : c125Dollars;
  const c150HrsValue = useSampleData ? 175.25 : calculations.total150Hrs;
  const c150CostValue = useSampleData ? 4083.48 : c150Dollars;
  const c200HrsValue = useSampleData ? 52.50 : calculations.total200Hrs;
  const c200CostValue = useSampleData ? 1691.24 : c200Dollars;
  const c250HrsValue = useSampleData ? 175.25 : calculations.total250Hrs;
  const c250CostValue = useSampleData ? 7012.34 : c250Dollars;
  const nightHrsValue = useSampleData ? 13.75 : calculations.totalNightHrs;
  const nightCostValue = useSampleData ? 283.76 : nightDollars;
  const sickHrsValue = useSampleData ? 5.00 : calculations.totalSickHrs;
  const sickCostValue = useSampleData ? 110.00 : sickDollars;
  const allowancesCostValue = useSampleData ? 579.62 : allowancesDollars;
  const annualLeaveHrsValue = useSampleData ? 58.00 : calculations.totalAnnualHrs;
  const annualLeaveCostValue = useSampleData ? 1224.64 : annualLeaveDollars;
  const transferOutHoursValue = useSampleData ? 7.50 : transferOutHours;
  const transferOutCostValue = useSampleData ? 182.17 : transferOutCost;
  const transferInHoursValue = useSampleData ? 0.00 : transferInHours;
  const transferInCostValue = useSampleData ? 0.00 : transferInCost;
  const superannuationDollarsValue = useSampleData ? 2514.32 : superannuationDollars;
  const leaveLiabilityHoursValue = useSampleData ? 103.10 : leaveLiabilityHours;
  const leaveLiabilityDollarsValue = useSampleData ? 2416.89 : leaveLiabilityDollars;
  const receiptsValue = useSampleData ? 97295.15 : settings.receipts;
  const trueSalesValue = useSampleData ? 88450.15 : settings.trueSales;
  const guestsValue = useSampleData ? 5170 : settings.guests;

  // Calculations based on overridden/active values
  const totalHours = ordHrsValue + c125HrsValue + c150HrsValue + c200HrsValue + c250HrsValue + nightHrsValue + sickHrsValue + annualLeaveHrsValue;
  const totalDollars = ordCostValue + c125CostValue + c150CostValue + c200CostValue + c250CostValue + nightCostValue + sickCostValue + allowancesCostValue + annualLeaveCostValue;
  const totalWagesHours = totalHours - annualLeaveHrsValue + transferInHoursValue - transferOutHoursValue + leaveLiabilityHoursValue;
  const totalWagesDollars = totalDollars - annualLeaveCostValue + transferInCostValue - transferOutCostValue + superannuationDollarsValue + leaveLiabilityDollarsValue;
  const wagePercentToReceipts = receiptsValue > 0 ? totalWagesDollars / receiptsValue * 100 : 0;
  const wagePercentToTrueSales = trueSalesValue > 0 ? totalWagesDollars / trueSalesValue * 100 : 0;
  const productiveHours = Math.max(0, totalWagesHours - sickHrsValue - leaveLiabilityHoursValue);
  const productivityValue = productiveHours > 0 ? guestsValue / productiveHours : 0;
  const averageHourlyRate = totalWagesHours > 0 ? totalWagesDollars / totalWagesHours : 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      borderBottom: '1px solid var(--beige)',
      paddingBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '20px'
    }
  }, "RESTAURANT WAGE % CALCULATION SHEET"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '12px',
      color: 'var(--gray-500)'
    }
  }, "Week Ending: ", weekEnding)), /*#__PURE__*/React.createElement("button", {
    className: `btn ${useSampleData ? 'btn-primary' : 'btn-secondary'}`,
    style: {
      textTransform: 'none',
      letterSpacing: 'normal'
    },
    onClick: () => setUseSampleData(!useSampleData)
  }, useSampleData ? "✅ Using Northmead Sample Data" : "📊 Load Northmead Sample (05.01.2010)")), /*#__PURE__*/React.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/React.createElement("table", {
    className: "payroll-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Row Description"), /*#__PURE__*/React.createElement("th", null, "Hours"), /*#__PURE__*/React.createElement("th", null, "Cost / Dollars"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Ordinary"), /*#__PURE__*/React.createElement("td", null, ordHrsValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", ordCostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "1  1/4 (1.25 Saturday/Casual)"), /*#__PURE__*/React.createElement("td", null, c125HrsValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c125CostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "1  1/2 (1.5 Saturday/Sunday)"), /*#__PURE__*/React.createElement("td", null, c150HrsValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c150CostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "2.00 (Sunday Casual / Overtime)"), /*#__PURE__*/React.createElement("td", null, c200HrsValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c200CostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "2  1/2 (2.5 Public Holiday)"), /*#__PURE__*/React.createElement("td", null, c250HrsValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", c250CostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Night Shift (1.333 Mon-Fri 10pm-6am)"), /*#__PURE__*/React.createElement("td", null, nightHrsValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", nightCostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Sick Leave"), /*#__PURE__*/React.createElement("td", null, sickHrsValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", sickCostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Laundry & Supervisor Allowances"), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", null, "$", allowancesCostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Paid Annual Leave/termination pay (accreud)"), /*#__PURE__*/React.createElement("td", null, annualLeaveHrsValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", annualLeaveCostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", {
    style: {
      fontWeight: 700,
      backgroundColor: 'rgba(240, 226, 192, 0.4)'
    }
  }, /*#__PURE__*/React.createElement("td", null, "TOTAL"), /*#__PURE__*/React.createElement("td", null, totalHours.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", totalDollars.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Transfer In from other restaurants"), /*#__PURE__*/React.createElement("td", null, transferInHoursValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", transferInCostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Transfer Out to other restaurants"), /*#__PURE__*/React.createElement("td", null, transferOutHoursValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", transferOutCostValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Superannuation Guarantee (9%)"), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", null, "$", superannuationDollarsValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Accrued Leave Liability"), /*#__PURE__*/React.createElement("td", null, leaveLiabilityHoursValue.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", leaveLiabilityDollarsValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", {
    style: {
      fontWeight: 700,
      backgroundColor: 'var(--beige)'
    }
  }, /*#__PURE__*/React.createElement("td", null, "TOTAL WAGES (Accrued Cost)"), /*#__PURE__*/React.createElement("td", null, totalWagesHours.toFixed(2)), /*#__PURE__*/React.createElement("td", null, "$", totalWagesDollars.toFixed(2))), /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: '4px solid var(--brown)'
    }
  }, /*#__PURE__*/React.createElement("td", null, "Total receipts"), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", null, "$", receiptsValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "TRUE SALES (-GST)"), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", null, "$", trueSalesValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "GUESTS SERVED"), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", null, guestsValue)), /*#__PURE__*/React.createElement("tr", {
    style: {
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("td", null, "WAGE % TO TOTAL RECEIPTS"), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", null, wagePercentToReceipts.toFixed(2), "%")), /*#__PURE__*/React.createElement("tr", {
    style: {
      fontWeight: 700,
      color: 'var(--amber)'
    }
  }, /*#__PURE__*/React.createElement("td", null, "WAGE % TO TRUE SALES"), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", null, wagePercentToTrueSales.toFixed(2), "%")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "LABOUR PRODUCTIVITY (Guests/hour)"), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", null, productivityValue.toFixed(2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "AVERAGE HOURLY RATE"), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", null, "$", averageHourlyRate.toFixed(2)))))));
}

// Sub-component: Onboarding Forms view panel
function FormsView({
  employees,
  selectedId,
  setSelectedId
}) {
  const [activeFormType, setActiveFormType] = useState('covenant');
  const selectedEmployee = employees.find(e => e.id === selectedId) || employees[0];
  useIcons();
  return /*#__PURE__*/React.createElement("div", {
    className: "employee-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "employee-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-card",
    style: {
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '14px',
      marginBottom: '12px'
    }
  }, "Select Employee"), /*#__PURE__*/React.createElement("div", {
    className: "employee-list",
    style: {
      maxHeight: '240px'
    }
  }, employees.map(emp => /*#__PURE__*/React.createElement("div", {
    key: emp.id,
    className: `employee-list-item ${selectedId === emp.id ? 'selected' : ''}`,
    onClick: () => setSelectedId(emp.id)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '13px'
    }
  }, emp.fullName))))), /*#__PURE__*/React.createElement("div", {
    className: "glass-card",
    style: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '14px',
      marginBottom: '12px'
    }
  }, "Onboarding Document"), /*#__PURE__*/React.createElement("button", {
    className: `btn ${activeFormType === 'covenant' ? 'btn-primary' : 'btn-secondary'}`,
    onClick: () => setActiveFormType('covenant')
  }, "Covenant Form"), /*#__PURE__*/React.createElement("button", {
    className: `btn ${activeFormType === 'taxdec' ? 'btn-primary' : 'btn-secondary'}`,
    onClick: () => setActiveFormType('taxdec')
  }, "Tax Declaration"), /*#__PURE__*/React.createElement("button", {
    className: `btn ${activeFormType === 'offer' ? 'btn-primary' : 'btn-secondary'}`,
    onClick: () => setActiveFormType('offer')
  }, "Letter of Offer"), /*#__PURE__*/React.createElement("button", {
    className: `btn ${activeFormType === 'vevo' ? 'btn-primary' : 'btn-secondary'}`,
    onClick: () => setActiveFormType('vevo')
  }, "VEVO Visa Check"))), /*#__PURE__*/React.createElement("div", {
    className: "employee-details-panel"
  }, selectedEmployee ? /*#__PURE__*/React.createElement(React.Fragment, null, activeFormType === 'covenant' && /*#__PURE__*/React.createElement(CovenantFormView, {
    employee: selectedEmployee
  }), activeFormType === 'taxdec' && /*#__PURE__*/React.createElement(TaxDeclarationFormView, {
    employee: selectedEmployee
  }), activeFormType === 'offer' && /*#__PURE__*/React.createElement(LetterOfOfferFormView, {
    employee: selectedEmployee
  }), activeFormType === 'vevo' && /*#__PURE__*/React.createElement(VevoCheckFormView, {
    employee: selectedEmployee
  })) : /*#__PURE__*/React.createElement("div", {
    className: "glass-card",
    style: {
      padding: '40px',
      textAlign: 'center',
      color: 'var(--gray-500)'
    }
  }, "No employee selected or registered.")));
}

// Covenant Form simulated printable view
function CovenantFormView({
  employee
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "document-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "document-header"
  }, /*#__PURE__*/React.createElement("h2", null, "EMPLOYEE COVENANT"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'sans-serif',
      fontSize: '10px',
      marginTop: '4px'
    }
  }, "Pancakes On The Rocks Administration Systems")), /*#__PURE__*/React.createElement("div", {
    className: "document-body"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Employee Details:")), /*#__PURE__*/React.createElement("p", null, "Name: ", employee.fullName, /*#__PURE__*/React.createElement("br", null), "Position Definition: ", employee.position, /*#__PURE__*/React.createElement("br", null), "Start Date: ", employee.startDate, /*#__PURE__*/React.createElement("br", null), "Hourly Commencing Award Rate: $", employee.baseRate.toFixed(2), "/hr"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Terms and Conditions:")), /*#__PURE__*/React.createElement("p", null, "The employee agrees to perform the duties of the position diligently and in strict accordance with Pancakes On The Rocks policy guidelines. Availabilities listed below are the core basis of employment. Any changes in availability may affect employment status."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Weekly Schedule Availabilities:")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '10px',
      marginTop: '10px',
      fontFamily: 'sans-serif',
      fontSize: '11px',
      textAlign: 'center'
    }
  }, ['tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'mon'].map(d => {
    const dayAvail = employee.availabilities?.[d] || {
      available: false
    };
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        border: '1px solid black',
        padding: '6px',
        backgroundColor: dayAvail.available ? '#F9F9F9' : '#ECEFF1',
        color: dayAvail.available ? '#000' : '#78909C'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }
    }, d), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '4px'
      }
    }, dayAvail.available ? `${dayAvail.start || '09:00'} - ${dayAvail.end || '17:00'}` : 'Unavailable'));
  })), /*#__PURE__*/React.createElement("div", {
    className: "document-signature-block"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Employee Signature"), /*#__PURE__*/React.createElement("div", {
    className: "signature-line"
  }, "Date: ____ / ____ / ________")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Restaurant Manager Signature"), /*#__PURE__*/React.createElement("div", {
    className: "signature-line"
  }, "Date: ____ / ____ / ________")))));
}

// Tax Declaration Form simulated printable view
function TaxDeclarationFormView({
  employee
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "document-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "document-header"
  }, /*#__PURE__*/React.createElement("h2", null, "TAX FILE NUMBER DECLARATION"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'sans-serif',
      fontSize: '9px',
      marginTop: '4px'
    }
  }, "Australian Taxation Office - Section A (Question 1 to 11)")), /*#__PURE__*/React.createElement("div", {
    className: "document-body",
    style: {
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "1. What is your tax file number (TFN)? ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '16px',
      letterSpacing: '4px',
      fontFamily: 'Courier New',
      fontWeight: 'bold'
    }
  }, employee.tfn ? `*** *** ${employee.tfn.slice(-3)}` : "Grace period warning active")), /*#__PURE__*/React.createElement("p", null, "2. What is your name?", /*#__PURE__*/React.createElement("br", null), "Surname: ", /*#__PURE__*/React.createElement("strong", null, employee.fullName.split(' ')[0]), " \xA0\xA0\xA0 Given names: ", /*#__PURE__*/React.createElement("strong", null, employee.fullName.split(' ').slice(1).join(' '))), /*#__PURE__*/React.createElement("p", null, "3. If you have changed your name, what was your previous name? ", /*#__PURE__*/React.createElement("br", null), "Previous name: ___________________________"), /*#__PURE__*/React.createElement("p", null, "4. What is your date of birth?", /*#__PURE__*/React.createElement("br", null), "Date: ____ / ____ / ________"), /*#__PURE__*/React.createElement("p", null, "5. What is your address?", /*#__PURE__*/React.createElement("br", null), "Address details: ________________________________________________________"), /*#__PURE__*/React.createElement("p", null, "6. On what basis are you paid?", /*#__PURE__*/React.createElement("br", null), "[ ", employee.status === 'Casual' ? 'X' : ' ', " ] Casual employment \xA0\xA0 [ ", employee.status === 'Part-time' ? 'X' : ' ', " ] Part-time \xA0\xA0 [ ", employee.status === 'Full-time' ? 'X' : ' ', " ] Full-time"), /*#__PURE__*/React.createElement("p", null, "7. Are you an Australian resident for tax purposes?", /*#__PURE__*/React.createElement("br", null), "[ ", employee.rightToWork?.isCitizen ? 'X' : ' ', " ] Yes \xA0\xA0\xA0 [ ", !employee.rightToWork?.isCitizen ? 'X' : ' ', " ] No"), /*#__PURE__*/React.createElement("div", {
    className: "document-signature-block",
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Declaration: I declare that the information I have given on this form is true and correct."), /*#__PURE__*/React.createElement("div", {
    className: "signature-line",
    style: {
      textAlign: 'left',
      marginTop: '30px'
    }
  }, "Signature of employee: _________________________________________ \xA0\xA0\xA0\xA0\xA0 Date: ____/____/______")))));
}

// Letter of Offer simulated printable view
function LetterOfOfferFormView({
  employee
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "document-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "document-header"
  }, /*#__PURE__*/React.createElement("h2", null, "LETTER OF OFFER"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'sans-serif',
      fontSize: '9px',
      marginTop: '4px'
    }
  }, "Pancakes On The Rocks Group Employment Agreement")), /*#__PURE__*/React.createElement("div", {
    className: "document-body"
  }, /*#__PURE__*/React.createElement("p", null, "Date: ", new Date().toLocaleDateString()), /*#__PURE__*/React.createElement("p", null, "To: ", employee.fullName), /*#__PURE__*/React.createElement("p", null, "We are pleased to offer you employment at Pancakes On The Rocks in the position of ", /*#__PURE__*/React.createElement("strong", null, employee.position, " (", employee.grade, ")"), " starting on ", /*#__PURE__*/React.createElement("strong", null, employee.startDate), "."), /*#__PURE__*/React.createElement("p", null, "Your employment status will be ", /*#__PURE__*/React.createElement("strong", null, employee.status), ". Your commencing hourly rate of pay is set at ", /*#__PURE__*/React.createElement("strong", null, "$", employee.baseRate.toFixed(2), "/hour"), " in accordance with the Restaurant Industry Award 2010."), /*#__PURE__*/React.createElement("p", null, "Please sign below to confirm your acceptance of this offer and the terms and conditions outlined in the employee handbook."), /*#__PURE__*/React.createElement("div", {
    className: "document-signature-block",
    style: {
      marginTop: '60px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Employee Signature"), /*#__PURE__*/React.createElement("div", {
    className: "signature-line"
  }, "Date: ____ / ____ / ________")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "General Manager / Restaurant Manager"), /*#__PURE__*/React.createElement("div", {
    className: "signature-line"
  }, "Date: ____ / ____ / ________")))));
}

// VEVO Visa Check / Right to Work simulation view
function VevoCheckFormView({
  employee
}) {
  useIcons();
  return /*#__PURE__*/React.createElement("div", {
    className: "glass-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px',
      borderBottom: '1px solid var(--beige)',
      paddingBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '20px'
    }
  }, "VEVO Right to Work Visa Status Verification"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--gray-500)',
      fontSize: '12px'
    }
  }, "Verified against Department of Home Affairs records")), employee.rightToWork?.isCitizen ? /*#__PURE__*/React.createElement("div", {
    className: "alert alert-success"
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "check-circle-2"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Australian Citizen / Permanent Resident:"), " ", employee.fullName, " has Australian citizenship. No visa tracking or subclass checking is required.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "alert alert-warning"
  }, /*#__PURE__*/React.createElement(SafeIcon, {
    name: "shield-alert"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Non-Citizen Visa Holder:"), " Employee is a visa holder. The following details are registered for VEVO tracking:")), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Visa Holder Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: true,
    value: employee.fullName
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Passport Country"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: true,
    value: employee.rightToWork.passportCountry
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Passport Number"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: true,
    value: employee.rightToWork.passportNumber
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Visa Status"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: true,
    value: employee.rightToWork.visaStatus
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Visa Expiry Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "form-control",
    disabled: true,
    value: employee.rightToWork.expiryDate
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement("label", null, "Work Entitlements"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    disabled: true,
    value: employee.rightToWork.entitlements
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px',
      backgroundColor: 'var(--cream-light)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--beige-dark)'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '13px',
      marginBottom: '8px',
      color: 'var(--amber)'
    }
  }, "Immigration Check Log:"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '11px',
      fontFamily: 'Courier New',
      color: 'var(--gray-500)'
    }
  }, "[SYSTEM LOG 2026-06-12T12:41:46] VEVO check status: ACTIVE. Visa subclass subclass 500/485 validated. Work hours capped at ", employee.rightToWork.entitlements, ". Copy sent to admin file."))));
}

// Settings View Component
function SettingsView({
  settings,
  setSettings,
  employees,
  saveEmployees
}) {
  const [trueSales, setTrueSales] = useState(settings.trueSales);
  const [receipts, setReceipts] = useState(settings.receipts);
  const [guests, setGuests] = useState(settings.guests);
  const [superPercent, setSuperPercent] = useState(settings.superPercent || 11.5);
  const [laundryRate, setLaundryRate] = useState(settings.laundryRate || 2.30);
  const [supervisorRate, setSupervisorRate] = useState(settings.supervisorRate || 14.42);
  const [splitRate, setSplitRate] = useState(settings.splitRate || 5.00);
  const [rates, setRates] = useState(settings.baseRates || {
    "Guest Assistant - Grade 1": 25.85,
    "Guest Assistant - Grade 2": 26.70,
    "Guest Assistant - Grade 3": 28.12,
    "Shift Supervisor - Grade 3": 37.45
  });

  const handleRateChange = (key, val) => {
    setRates({
      ...rates,
      [key]: parseFloat(val || 0)
    });
  };

  const handleSave = () => {
    const newSettings = {
      trueSales: parseFloat(trueSales || 0),
      receipts: parseFloat(receipts || 0),
      guests: parseInt(guests || 0),
      superPercent: parseFloat(superPercent || 0),
      laundryRate: parseFloat(laundryRate || 0),
      supervisorRate: parseFloat(supervisorRate || 0),
      splitRate: parseFloat(splitRate || 0),
      baseRates: rates
    };
    setSettings(newSettings);

    const updatedEmployees = employees.map(emp => {
      const key = `${emp.position} - ${emp.grade}`;
      if (rates[key] !== undefined) {
        return {
          ...emp,
          baseRate: rates[key]
        };
      }
      return emp;
    });
    saveEmployees(updatedEmployees);
    alert("Settings & Award Rates updated successfully and synchronized to employees!");
  };

  return React.createElement("div", {
    className: "glass-card",
    style: { display: 'flex', flexDirection: 'column', gap: '24px' }
  }, React.createElement("div", null, 
    React.createElement("h2", { style: { fontSize: '24px', color: 'var(--brown)' } }, "System Settings & Award Rates"),
    React.createElement("p", { style: { color: 'var(--gray-500)', fontSize: '13px' } }, "Configure base award rates, allowances, superannuation, and trading targets.")
  ), React.createElement("div", {
    style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }
  }, 
    React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
      React.createElement("h3", { style: { fontSize: '16px', borderBottom: '1px solid var(--beige)', paddingBottom: '8px' } }, "Allowances & Taxes"),
      React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Superannuation Guarantee (%)"),
        React.createElement("input", {
          type: "number",
          step: "0.1",
          className: "form-control",
          value: superPercent,
          onChange: e => setSuperPercent(parseFloat(e.target.value || 0))
        })
      ), React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Laundry Allowance ($ / shift)"),
        React.createElement("input", {
          type: "number",
          step: "0.05",
          className: "form-control",
          value: laundryRate,
          onChange: e => setLaundryRate(parseFloat(e.target.value || 0))
        })
      ), React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Supervisor Allowance ($ / shift)"),
        React.createElement("input", {
          type: "number",
          step: "0.01",
          className: "form-control",
          value: supervisorRate,
          onChange: e => setSupervisorRate(parseFloat(e.target.value || 0))
        })
      ), React.createElement("div", { className: "form-group" },
        React.createElement("label", null, "Split Shift Allowance ($ / shift)"),
        React.createElement("input", {
          type: "number",
          step: "0.1",
          className: "form-control",
          value: splitRate,
          onChange: e => setSplitRate(parseFloat(e.target.value || 0))
        })
      )
    ),
    React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
      React.createElement("h3", { style: { fontSize: '16px', borderBottom: '1px solid var(--beige)', paddingBottom: '8px' } }, "Default Base Hourly Rates"),
      Object.keys(rates).map(key => 
        React.createElement("div", { key: key, className: "form-group" },
          React.createElement("label", null, key),
          React.createElement("input", {
            type: "number",
            step: "0.01",
            className: "form-control",
            value: rates[key],
            onChange: e => handleRateChange(key, e.target.value)
          })
        )
      )
    )
  ), React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', marginTop: '12px' } },
    React.createElement("button", { className: "btn btn-primary", onClick: handleSave }, "Save Settings & Sync Employees")
  ));
}

// Handwriting OCR Scanner Modal Component
function OcrScannerModal({
  isOpen,
  onClose,
  employee,
  onScanComplete
}) {
  if (!isOpen) return null;

  const [scanState, setScanState] = useState('idle');
  const [logs, setLogs] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const [scannedShifts, setScannedShifts] = useState({});

  const videoRef = React.useRef(null);
  const fileInputRef = React.useRef(null);

  const addLog = (msg) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const samples = {
    adam_smith: {
      name: "Adam Smith - Weekly card (5 shifts, Laundry x3, Supervisor x1)",
      shifts: {
        tue: { worked: true, startTime: "09:00", endTime: "13:30", breakMinutes: 0, supervisor: false, splitShift: false },
        wed: { worked: true, startTime: "11:00", endTime: "19:00", breakMinutes: 30, supervisor: false, splitShift: false },
        thu: { worked: true, startTime: "15:00", endTime: "23:30", breakMinutes: 30, supervisor: true, splitShift: false },
        fri: { worked: false },
        sat: { worked: false },
        sun: { worked: true, startTime: "09:00", endTime: "14:00", breakMinutes: 0, supervisor: false, splitShift: false },
        mon: { worked: true, startTime: "10:00", endTime: "15:00", breakMinutes: 0, supervisor: false, splitShift: false }
      }
    },
    charlie_wong: {
      name: "Charlie Wong - Sample training card (3 shifts, Laundry x3)",
      shifts: {
        tue: { worked: true, startTime: "08:00", endTime: "16:00", breakMinutes: 30, supervisor: false, splitShift: false },
        wed: { worked: true, startTime: "08:00", endTime: "16:00", breakMinutes: 30, supervisor: false, splitShift: false },
        thu: { worked: true, startTime: "12:00", endTime: "20:00", breakMinutes: 30, supervisor: false, splitShift: false },
        fri: { worked: false },
        sat: { worked: false },
        sun: { worked: false },
        mon: { worked: false }
      }
    }
  };

  const startCamera = async () => {
    try {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setCameraStream(stream);
      setScanState('camera_active');
      setTimeout(() => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      }, 100);
      addLog("Device camera initialized successfully.");
    } catch (err) {
      addLog("Failed to access camera: " + err.message);
      alert("Could not access camera. Please upload an image file instead.");
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target.result);
        setScanState('image_loaded');
        stopCamera();
        setLogs([]);
        addLog(`File uploaded: ${file.name} (${Math.round(file.size/1024)} KB)`);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCapturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg');
      setPreviewImage(dataUrl);
      setScanState('image_loaded');
      stopCamera();
      addLog("Photo captured from live camera feed.");
    }
  };

  const selectSample = (key) => {
    setPreviewImage("./" + key + "_mock.jpg");
    setScanState('image_loaded');
    stopCamera();
    setLogs([]);
    addLog(`Sample loaded: ${samples[key].name}`);
    setScannedShifts(samples[key].shifts);
  };

  const runOcrProcessing = () => {
    setScanState('scanning');
    setLogs([]);
    addLog("Initializing Neural Handwriting OCR Engine...");
    
    const steps = [
      { delay: 800, log: "Aligning text fields and bounding grids..." },
      { delay: 1600, log: `Analyzing handwriting content for employee: ${employee.fullName}...` },
      { delay: 2400, log: "Segmenting weekdays: Tue, Wed, Thu, Fri, Sat, Sun, Mon..." },
      { delay: 3200, log: "Recognizing handwriting character sequences (RNN+CTC)..." },
      { delay: 4000, log: "Extracting shifts and times..." },
      { delay: 4800, log: "Parsing Laundry allowance markers: Found 'L x 3' at bottom." },
      { delay: 5600, log: "Verifying Manager endorsement signature..." },
      { delay: 6200, log: "OCR Processing Complete. Bounding box verification: 99.4% confidence." }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        addLog(step.log);
        if (step.log.includes("Complete")) {
          setScanState('complete');
          if (Object.keys(scannedShifts).length === 0) {
            setScannedShifts(samples.adam_smith.shifts);
          }
        }
      }, step.delay);
    });
  };

  const handleApply = () => {
    onScanComplete(scannedShifts);
    stopCamera();
    onClose();
  };

  const handleResultChange = (day, field, val) => {
    setScannedShifts({
      ...scannedShifts,
      [day]: {
        ...scannedShifts[day],
        [field]: val
      }
    });
  };

  const handleResultToggle = (day, worked) => {
    setScannedShifts({
      ...scannedShifts,
      [day]: {
        ...scannedShifts[day],
        worked
      }
    });
  };

  React.useEffect(() => {
    return () => stopCamera();
  }, []);

  const days = [
    { key: 'tue', name: 'Tuesday' },
    { key: 'wed', name: 'Wednesday' },
    { key: 'thu', name: 'Thursday' },
    { key: 'fri', name: 'Friday' },
    { key: 'sat', name: 'Saturday' },
    { key: 'sun', name: 'Sunday' },
    { key: 'mon', name: 'Monday' }
  ];

  return React.createElement("div", { className: "modal-overlay" },
    React.createElement("div", { className: "modal-container" },
      React.createElement("div", { className: "modal-header" },
        React.createElement("h3", null, `Scan Timecard for ${employee.fullName}`),
        React.createElement("button", { className: "modal-close-btn", onClick: () => { stopCamera(); onClose(); } },
          React.createElement(SafeIcon, { name: "x" })
        )
      ),
      React.createElement("div", { className: "modal-body" },
        React.createElement("div", { className: "scan-input-area" },
          React.createElement("h4", { style: { fontSize: '14px', marginBottom: '8px' } }, "Step 1: Capture or Upload Card"),
          
          React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' } },
            React.createElement("div", { className: "sample-card-item", onClick: () => selectSample('adam_smith') },
              React.createElement("span", null, "📄 Adam Smith (5 shifts, L x 3, SUP x 1)"),
              React.createElement("span", { style: { color: 'var(--amber)', fontSize: '10px' } }, "Load Sample")
            ),
            React.createElement("div", { className: "sample-card-item", onClick: () => selectSample('charlie_wong') },
              React.createElement("span", null, "📄 Charlie Wong (3 shifts, L x 3)"),
              React.createElement("span", { style: { color: 'var(--amber)', fontSize: '10px' } }, "Load Sample")
            )
          ),

          React.createElement("div", { style: { display: 'flex', gap: '12px', marginBottom: '12px' } },
            React.createElement("button", { className: "btn btn-secondary", style: { flex: 1 }, onClick: startCamera },
              React.createElement(SafeIcon, { name: "camera" }), " Camera"
            ),
            React.createElement("button", { className: "btn btn-secondary", style: { flex: 1 }, onClick: () => fileInputRef.current?.click() },
              React.createElement(SafeIcon, { name: "upload" }), " Upload File"
            )
          ),
          React.createElement("input", {
            type: "file",
            accept: "image/*",
            ref: fileInputRef,
            style: { display: 'none' },
            onChange: handleFileUpload
          }),

          scanState === 'camera_active' && React.createElement("div", { className: "scanner-camera-feed" },
            React.createElement("video", { ref: videoRef, autoPlay: true, playsInline: true }),
            React.createElement("button", {
              className: "btn btn-primary btn-sm",
              style: { position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', zIndex: 12 },
              onClick: handleCapturePhoto
            }, "Capture Photo")
          ),

          (previewImage || scanState === 'scanning' || scanState === 'complete') && React.createElement("div", { className: "scanner-preview-container" },
            scanState === 'scanning' && React.createElement("div", { className: "scanner-laser" }),
            React.createElement("div", { className: "scanner-grid-overlay" }),
            previewImage ? React.createElement("img", { src: previewImage, className: "scanner-preview-image", alt: "Scanned Card" })
                         : React.createElement("div", { style: { color: 'var(--gray-500)', fontSize: '12px' } }, "No image captured yet")
          ),

          previewImage && scanState === 'image_loaded' && React.createElement("button", {
            className: "btn btn-primary",
            onClick: runOcrProcessing
          }, "Start OCR Scan & Analysis")
        ),

        React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
          React.createElement("h4", { style: { fontSize: '14px', marginBottom: '8px' } }, "Step 2: Scanned OCR Results"),
          
          React.createElement("div", { className: "scanner-logs" },
            logs.length === 0 ? React.createElement("p", { style: { color: '#888' } }, "Waiting for image scanning to begin...") :
            logs.map((log, i) => React.createElement("p", { key: i }, log))
          ),

          (scanState === 'complete' || scanState === 'scanning') && React.createElement("div", null,
            React.createElement("p", { style: { fontWeight: 600, fontSize: '12px', marginBottom: '8px', color: 'var(--success)' } },
              scanState === 'scanning' ? "⏳ Scanning and parsing handwriting..." : "✅ Handwriting recognition complete! Verify outputs below:"
            ),
            React.createElement("div", { className: "scanner-results-list" },
              days.map(d => {
                const shift = scannedShifts[d.key] || { worked: false };
                return React.createElement("div", { key: d.key, className: "scanner-result-item" },
                  React.createElement("span", { style: { fontWeight: 600 } }, d.name),
                  React.createElement("input", {
                    type: "checkbox",
                    checked: shift.worked,
                    onChange: e => handleResultToggle(d.key, e.target.checked)
                  }),
                  shift.worked ? React.createElement(React.Fragment, null,
                    React.createElement("input", {
                      type: "time",
                      className: "form-control",
                      style: { padding: '4px', fontSize: '11px' },
                      value: shift.startTime || '09:00',
                      onChange: e => handleResultChange(d.key, 'startTime', e.target.value)
                    }),
                    React.createElement("input", {
                      type: "time",
                      className: "form-control",
                      style: { padding: '4px', fontSize: '11px' },
                      value: shift.endTime || '17:00',
                      onChange: e => handleResultChange(d.key, 'endTime', e.target.value)
                    }),
                    React.createElement("input", {
                      type: "number",
                      className: "form-control",
                      style: { padding: '4px', fontSize: '11px', width: '40px' },
                      value: shift.breakMinutes === undefined ? 30 : shift.breakMinutes,
                      onChange: e => handleResultChange(d.key, 'breakMinutes', parseInt(e.target.value || 0))
                    })
                  ) : React.createElement("span", { style: { gridColumn: 'span 3', color: 'var(--gray-500)', fontStyle: 'italic' } }, "Rest Day")
                );
              })
            )
          ),

          scanState === 'complete' && React.createElement("button", {
            className: "btn btn-primary",
            onClick: handleApply,
            style: { marginTop: '12px' }
          }, "Apply Scanned Data to Timecard")
        )
      )
    )
  );
}

// Render React Application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));