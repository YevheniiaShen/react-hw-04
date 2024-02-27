import toast from 'react-hot-toast';
import css from './SearchBar.css'

export const SearchBar = ({ onSearch }) => {
    const handleSubmit = evt => {
        evt.preventDefault();

        if (evt.target.elements.query.value === "") {
            toast.error('Please fill in the field!', {
                duration: 1500,
                position: 'bottom-center',
            });
            return;
        }

        onSearch(evt.target.elements.query.value);
        evt.target.reset();
    }

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                    className={css.input}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};