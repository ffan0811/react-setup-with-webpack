import React from 'react'
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Home.scss'

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('test')}>
            homeeee집집
            <Link to='/next'>go to second page</Link>
        </div>
    )
}

export default Home