import style from "./css/experience.module.css"
import p1 from "../../../public/img/p1.png"
import p2 from "../../../public/img/py2.png"
export const Experience = () =>{
    return(
        <section className={style.works}>
            <h2 className={style.workstitle}>Experiencia</h2>
            <div className={style.worksImgs}>
                <img src={p1} alt="" className={style.worksImg}/>
                <img src={p2} alt="" className={style.worksImg}/>
                <img src={p1} alt="" className={style.worksImg}/>
                <img src={p1} alt="" className={style.worksImg}/>
                <img src={p1} alt="" className={style.worksImg}/>
                <img src={p1} alt="" className={style.worksImg}/>
            </div>
        </section>
    )
}