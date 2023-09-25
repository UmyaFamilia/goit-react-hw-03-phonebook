import css from './Filter.module.css';

export const Filter = ({ addToFilter }) => {
  const filter = ({ target: { value } }) => {
    addToFilter(value);
  };

  return (
    <div className={css.filterCover}>
      <label htmlFor="find">find contacts by name</label>
      <input className={css.inpute} name="find" type="text" onChange={filter} />
    </div>
  );
};
