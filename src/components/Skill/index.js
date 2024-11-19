import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Skill = () => {

  const [edu, setEdu] = useState({});
  const [exp, setExp] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const eduRef = ref(db, "edu");
    const expRef = ref(db, "exp");

    setLoading(true);
    onValue(eduRef, (snapshot) => {
      const data = snapshot.val();
      setEdu(data);
      setLoading(false);
    });
    onValue(expRef,(snapshot)=>{
      const data = snapshot.val();
      setExp(data);
      setLoading(false);
    })

  }, []);
    return (
        <div>
        <section className="skills section" id="skills">
          <h2 className="section__title">Education & Experience</h2>
          <div className="skills__container container grid">
            <div className="skills__content">
              <h3 className="skills__title">Education</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{edu.sd}</h3>
                
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{edu.smp}</h3>
                
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{edu.sma}</h3>
                
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__content">
              <h3 className="skills__title">Experience</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{exp.exp1}</h3>
                      {/* <span class="skills__level">Intermediate</span> */}
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{exp.exp2}
                      </h3>
                    
                    </div>
                  </div>
                  
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{exp.exp3}
                      </h3>
                    
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{exp.exp8}
                      </h3>
                    </div>
                  </div>   
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{exp.exp4}</h3>
                    
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{exp.exp5}</h3>
                    
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{exp.exp6}
                      </h3>
                
                    </div>
                  </div>
                  <div className="skills__data">
                    <i className="bx bx-badge-check" />
                    <div>
                      <h3 className="skills__name">{exp.exp7}
                      </h3>
                    </div>
                    
                  </div>                 
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};
export default Skill;