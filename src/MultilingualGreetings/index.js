import './index.css'
import {Component} from 'react'

class MultilingualGreetings extends Component {
  onChangeActiveId = id => {
    const {changeActiveId} = this.props
    changeActiveId(id)
  }

  render() {
    const {languageGreetingsList, activeButtonId} = this.props
    const activeLanguageGreetings = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeButtonId,
    )

    console.log(activeLanguageGreetings)
    return (
      <div className="multilingual-greetings-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="list-container">
          {languageGreetingsList.map(eachLanguage => (
            <li className="list-item" key={eachLanguage.id}>
              <button
                type="button"
                className={
                  activeButtonId === eachLanguage.id
                    ? 'active-button button'
                    : 'button'
                }
                onClick={this.onChangeActiveId}
                value={eachLanguage.id}
              >
                {eachLanguage.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <img
          src={activeLanguageGreetings[0].imageUrl}
          alt={activeLanguageGreetings[0].imageAltText}
          className="image"
        />
      </div>
    )
  }
}

export default MultilingualGreetings
