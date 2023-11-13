import React, { useState } from "react";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [character, setCharacter] = useState("");
  const [favorite, setFavorite] = useState("");

  const handleSelect = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "city":
        setCity(value);
        break;
      case "character":
        setCharacter(value);
        break;
      case "favorite":
        setFavorite(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log(name, age, city, character, favorite);
    // reset form
    setName("");
    setAge("");
    setCity("");
    setCharacter("");
    setFavorite("");
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>Регистрация</button>
      {showForm && (
        <form>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="age">Возраст:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />

          <label htmlFor="city">Родной город:</label>
          <select id="city" name="city" value={city} onChange={handleSelect}>
            <option value="">Выберите город</option>
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Казань">Казань</option>
          </select>

          <label htmlFor="character">Какого персонажа бы выбрали:</label>
          <select
            id="character"
            name="character"
            value={character}
            onChange={handleSelect}
          >
            <option value="">Выберите персонажа</option>
            <option value="Гарри Поттер">Гарри Поттер</option>
            <option value="Люк Скайуокер">Люк Скайуокер</option>
            <option value="Шерлок Холмс">Шерлок Холмс</option>
          </select>

          <label htmlFor="favorite">Выберите любимый:</label>
          <select
            id="favorite"
            name="favorite"
            value={favorite}
            onChange={handleSelect}
          >
            <option value="">Выберите любимое</option>
            <option value="Цвет">Цвет</option>
            <option value="Блюдо">Блюдо</option>
            <option value="Песня">Песня</option>
          </select>

          <button type="submit" onClick={handleSubmit}>
            Отправить
          </button>
          <button type="button" onClick={() => setShowForm(false)}>
            Отмена
          </button>
        </form>
      )}
    </div>
  );
}

export default Home;

