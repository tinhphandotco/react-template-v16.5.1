import React from 'react'
import { connect } from 'react-redux'
import { Spin } from 'antd';

// actions
import { getCountries } from 'actions/countries'

class Test extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false
    }
    // axios.get('https://importwise.app/api/information/countries').then(res => {
    //   console.log(res.data)
    // })
  }

  handleClick = async () => {
    this.setState({
      isLoading: true
    })
    console.log('load')
    try {
      await this.props.getCountries()

    } catch (err) {
      console.log(err.message);
    }
    console.log('done')


    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <div className='Test--container'>
        <button onClick={this.handleClick}>Get Countries</button>
        <div className='List-countries'>
          <br/>
          {
            this.state.isLoading && <Spin />
          }
          <br/>
          {
            this.props.countries.map((country, index) => {
              return (
                <div key={index}>
                  <b>{index + 1} Name: </b> <span>{country.name}; </span>
                  <b>Currency: </b> <span>{country.currency}</span>
                  <br />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapPropsToState = {
  getCountries,
}

export default connect(mapStateToProps, mapPropsToState)(Test)
