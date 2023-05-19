import { MultiChatSocket , MultiChatWindow , useMultiChatLogic} from 'react-chat-engine-advanced'
import { PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic (
            '41b5ef44-30ce-433f-8f0a-7daf8b733ce9',
            props.user.username,
            props.user.secret
        );
    return( 
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height :'100%'}}/>

        </div>
    )
    // 2 dark chat
    // return(
    //     <div style={{height: '100vh'}}>
    //         <PrettyChatWindow
    //             projectId='41b5ef44-30ce-433f-8f0a-7daf8b733ce9'
    //             username={props.user.username}
    //             secret={props.user.secret}
    //             style={{height: '100%'}}
    //         />
    //     </div>
    // )
}
export default ChatsPage