import "../../styles/Hooks/hooksComponents.css";

const Tags = ({ hook }) => {
  return (
    <div className="Tags">
      <div>
        <div className="tags-container">
          <span className={hook.type === 'Kissing'? "selected" : "unselected"}>Kissing</span>
          <span className={hook.type === 'Foreplay'? "selected" : "unselected"}>Foreplay</span>
          <span className={hook.type === 'Sex'? "selected" : "unselected"}>Sex</span>
        </div>
        <div className="tags-container2">
          <span className={hook.protection? "selected" : "unselected"}>Protected</span>
          <span className={hook.orgasm? "selected" : "unselected"}>Orgasm</span>
        </div>
      </div>
      <div className="gauge-container">
        <div className="gauge">
          <div className="level" style={{ width: `${hook.duration * 50}%` }}></div>
        </div>
        <div className="legend">
        {console.log(hook.duration)}
          <h3 className={hook.duration===0?"colored-text":""}>Too short</h3>
          <h3 className={hook.duration===1?"colored-text":""}>Perfect</h3>
          <h3 className={hook.duration===2?"colored-text":""}>Too long</h3>
        </div>
      </div>
    </div>
  );
};

export default Tags;
