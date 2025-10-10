import styles from './Button.module.css'

const Button = ({isOutLine, text, icon, onlyText, ...rest}) => {
    if(isOutLine) {
        return (
          <>
            <button {...rest} className={styles.outLine_btn}>
              <div className={styles.icon}>
                  {icon}
              </div>
              <div className="text">
                  {text}
              </div>
            </button>
          </>
        )        
    }
    else if (onlyText) {
      return (
        <>
          <button {...rest} className={styles.primary_btn}>
              <div className="text">
                  {text}
              </div>
          </button>

        </>
      )
    }
    else {
        return (
          <>
            <button {...rest} className={styles.primary_btn}>
              <div className={styles.icon}>
                  {icon}
              </div>
              <div className="text">
                  {text}
              </div>
            </button>
          </>
        )
    }
}

export default Button
