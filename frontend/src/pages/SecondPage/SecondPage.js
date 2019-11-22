import React from 'react'
import classNames from 'classnames/bind';
import styles from './SecondPage.scss'

const cx = classNames.bind(styles);

const SecondPage = () => {
    var test = true;
    return (
        <div className={cx('div', test && 'test')}>
            SecondPage
        </div>
    )
}

export default SecondPage