import styled from "styled-components";
import Icon from "./Icon";
import TimeDisplay from './Time';

const Header = styled.header`
    position: relative;
`;

const HeaderIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 20px;

    i {
        color: #fff;
        font-size: 2rem;
        :nth-child(2) {
            margin-top: 0.5rem;
        }
    }
`;

const HeaderInfo = styled.p`
    position: absolute;
    width: calc(100% - 40px);
    bottom: 10px;
    color: #fff;
    left: 20px;
    background-color: rgba(0, 0, 0, 0.507);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
`;

const HeaderImg = styled.img`
    max-height: 200px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: bottom;
`;

function TodoHeader(props) {
    const onReset = () => {
        props.handleReset();
    }

    let completedTasks = props.todos.filter(tObj => tObj.isDone);

    return (
        <Header>
            <HeaderIconContainer>
                <Icon iconName='refresh' clickFunc={onReset}></Icon>
                {props.isLoading ? '' : <Icon iconName='photo' clickFunc={props.onNewHeaderImage}></Icon>}
                
            </HeaderIconContainer>
            <HeaderInfo>
                {props.isLoading ? <span>Loading...</span> : <TimeDisplay />}
                <span>
                    Tasks completed: {completedTasks.length}/{props.todos.length}
                </span>
            </HeaderInfo>
            <HeaderImg
                src={props.headerImage}
                alt='Cover'
            />
        </Header>
    );
}

export default TodoHeader;
