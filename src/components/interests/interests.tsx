import './Interests.css';


function Interests({interests}:{interests:{title:string, description:string}[]}) {
    
  return (
    <div className="paragraphsContainer">
      
        {interests.map((entry: {title:string, description:string}) => {
           return ( 
           <div className="paragraph">
               <span className="fieldHeader">{entry.title}</span>
               <span className="content">{entry.description}</span>
           </div>
           )
        })
    }
    </div>
  );
}

export default Interests;
