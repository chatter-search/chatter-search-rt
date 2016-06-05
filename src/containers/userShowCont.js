/**
 * @module containers/userShowCont
 * @description User data
 */

import { connect } from 'react-redux'
import UserShow from '../components/userShow'

import '../plugins/serializeObject'

const mapStateToProps = (state) => ({
  userData: state.userData.data
})

const UserShowCont = connect(
  mapStateToProps
)(UserShow)

export default UserShowCont
