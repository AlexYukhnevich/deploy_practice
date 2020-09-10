import { connect } from 'react-redux';
import { projectActions } from '../../../store/actions';
import ProjectPanelComponent from './project-panel.component';

const { projectCreateOpenAction, setActiveProject, setReplicaOfActiveProject } = projectActions;

const mapStateToProps = ({ project }) => ({
  open: project.openCreateProjectPopup,
});

const mapDispatchToProps = (dispatch) => ({
  openPopup: (bool) => {
    dispatch(projectCreateOpenAction(bool));
    dispatch(setActiveProject(null));
    dispatch(setReplicaOfActiveProject(null));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPanelComponent);