import css from './LoadMoreBtn.css'

export const LoadMoreBtn = ({ onClick }) => {
    return (
        <div className={css.container}>
            <button className={css.button} type="button" onClick={onClick} >Load More</button>
        </div>
    );
};