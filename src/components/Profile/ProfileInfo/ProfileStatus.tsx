import React, {ChangeEvent} from 'react';

type StatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

class ProfileStatus extends React.Component<StatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () =>  {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<any>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <div>
                            <input value={this.state.status}
                                   onBlur={this.deactivateEditMode}
                                   onChange={this.onStatusChange}
                                   autoFocus/>
                        </div>
                        : <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                        </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;