import AddProComponent from "../components/AddProComponent"
import ProjectCard from "../components/ProjectCard";
import pro2 from '../assets/img/pro2.jpg'
import pro1 from '../assets/img/pro1.jpg'
import pro3 from '../assets/img/pro3.jpg'



const Projects = () => {

  const projectdata = [
    {
      title: "Portfolio",
      des: "A simple portfolio which is developed using Html, Css, Javascript",
      covImage: pro1,
      link: "https://github.com/Vinoth-Kumar-N/Voting-Dapp",
      id: 2
    },
    {
      title: "Self-coded Portfolio",
      des: "A portfolio developed which is developed using React and Tailwind Css with Best Practises",
      covImage: pro2,
      link: "https://github.com/Vinoth-Kumar-N/Voting-Dapp",
      id: 3
    },
    {
      title: "Voting Dapp",
      des: "A decentralized application for voting",
      covImage: pro3,
      link: "https://github.com/Vinoth-Kumar-N/Voting-Dapp",
      id: 1
    }
    
  ]
  // const [projectdata, setprojectdata] = useState(null);
  // useEffect(() => {
  //   fetchprojects();
  // }, []);

  // const fetchprojects = async () => {
  //   try {
  //     const { data } = await getProjects();
  //     setprojectdata(data);
  //   } catch (error) {
  //     console.warn(error);
  //     toast('Error', {
  //       className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
  //       icon: <MessageCircleIcon />,
  //     });
  //   }
  // }

  // console.log(projectdata);

  // if (!projectdata || projectdata.length === 0) {
  //   return (
  //     <div className="w-full h-[10%] flex justify-center items-center">
  //       <AddProComponent />
  //     </div>
  //   )
  // }

  return (
    <>

      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        <div className="w-full h-[10%] flex justify-center items-start px-10">
          <AddProComponent />
        </div>
        {
          projectdata.map((data, index) => (
            <ProjectCard title={data.title} desc={data.des} key={data.id || index} cover={data.covImage} link={data.link} id={data.id} />
          ))
        }
      </div >

    </>

  );
}

export default Projects;