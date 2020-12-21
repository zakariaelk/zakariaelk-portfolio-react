import React from "react";
import ProjectDetails from "./pages/ProjectDetails";

// export default function DataFetch() {
//   const firebaseConfig = {
//     apiKey: "AIzaSyCV96Bp-JVn11VFaTSJiaNgrgaLXFl8zR4",
//     authDomain: "zakariaelk-portfolio.firebaseapp.com",
//     projectId: "zakariaelk-portfolio",
//     storageBucket: "zakariaelk-portfolio.appspot.com",
//     messagingSenderId: "185022383867",
//     appId: "1:185022383867:web:6dd3dc380b8251001e525e",
//     measurementId: "G-FNG39Z67V0",
//   };

//   const [data, setData] = useState({ projects: [], isFetching: false });

//   // GET DATA
//   const gotData = (projectsRef) => {
//     const projectsData = projectsRef.val();
//     setData({ projects: projectsData, isFetching: false });
//     localStorage.setItem("projects", JSON.stringify(projectsData));
//   };

//   //ERR DATA
//   const errData = (error) => {
//     console.log(error);
//     setData({ projects: data.projects, isFetching: false });
//   };

//   // FETCHING DATA

//   function fetchData() {
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }
//     const database = firebase.database();
//     console.log(database);

//     const projectsRef = database.ref("projects");
//     setData({ projects: data.projects, isFetching: true });
//     projectsRef.on("value", gotData, errData);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <ProjectList />
//       <ProjectDetails />
//     </>
//   );
// }
