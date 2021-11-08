function Icon(props) {
    return (
        <i onClick={props.clickFunc || ''} className={"fa fa-" + props.iconName}  aria-hidden='true'  ></i>
    );
}

export default Icon;