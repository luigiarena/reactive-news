import "./Card.css";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Card({ title }) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={(darkMode ? "dark" : "") + " card"}>
            <h2>{title}</h2>
            <p>This is a simple card component.</p>
        </div>
    )
}

function CardsContainer() {
  return (
    <div className="cards-container">
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
                <Card title="Card 3" />
                <Card title="Card 3" />
                <Card title="Card 3" />
                <Card title="Card 3" />
                <Card title="Card 3" />
                <Card title="Card 3" />
                <Card title="Card 3" />
                <Card title="Card 3" />
                <Card title="Card 3" />
    </div>
  )
}

export default CardsContainer;