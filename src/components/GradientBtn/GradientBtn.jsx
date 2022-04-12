import style from './GradientBtn.module.scss';
import React, { useState } from 'react';
import cx from 'classnames';

export default () => {
    const [active, setActive] = useState(false);

    function changeBtn() {
        setActive(!active);
    }

    return (
        <button
            className={cx(style.GradientBtn, {[style.active]: active })}
            type="button"
            onClick={changeBtn}
        >
            Gradientbtn
        </button>
    );
}

