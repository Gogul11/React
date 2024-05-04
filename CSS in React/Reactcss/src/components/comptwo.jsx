//Styling card two using css module.

import styles from "./comptwo.module.css"

function Card2(){

    return(
        <div className={styles.two}>
            <h1>Card two</h1>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Beatae fugit laboriosam facere omnis ipsum rerum 
                odio temporibus blanditiis aliquam mollitia 
                ab repudiandae nulla consequuntur sequi,
                soluta ducimus commodi, qui quia.</p>
        </div>
    )
}

export default Card2;