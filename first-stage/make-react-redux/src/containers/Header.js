import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStoreToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStoreToProps)(Header)