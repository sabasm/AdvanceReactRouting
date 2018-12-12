import React,{Component} from 'react'
import characters from './characters'


class CharactersDetail extends Component {


    componentWillMount() {
      const { id } = this.props.match.params;
      this.setState({
        id
      })
    }
  
    render(){
      const { id } = this.state;
      console.log(id);
      let character = characters.filter(c => {
        console.log(c)
        return c.id == id
      })
      console.log(character)
      return(
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vh',
          height: '100vh',
          flexDirection: 'column'
        }}>
          <img src={character[0].image} alt="profile"/>
          <p>{character[0].name}</p>
          Esto es el detalle del chracter
          <button onClick={() => this.props.history.push('/characters')}>Go Back</button> 
          {/* en vez de .push se puede utilizar .goBack() */}
        </div>
      )
    }
  }
  
  export default CharactersDetail