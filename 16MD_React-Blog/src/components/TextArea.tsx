import useTextArea from '../hooks/useTextArea';


export default function TextArea(){
    const {value,changeHandler} = useTextArea();
    
    return(
        <>
            <textarea value={value} onChange={changeHandler} cols={3} rows={10}></textarea>
        </>
    );
}