import style from "./css/experience.module.css"
import p1 from "../../../public/img/p1.png"
import p2 from "../../../public/img/py2.png"
import p3 from "../../../public/img/p3.png"
import p4 from "../../../public/img/p4.png"
export const Experience = () =>{
    return(
        <section className={style.works} id="experience">
            <h2 className={style.workstitle}>Experiencia</h2>
            <div className={style.worksImgs}>
                <img src={p1} alt="" className={style.worksImg}/>
                <img src={p2} alt="" className={style.worksImg}/>
                <img src={p3} alt="" className={style.worksImg}/>
                <img src={p4} alt="" className={style.worksImg}/>
            </div>
        </section>
    )
}