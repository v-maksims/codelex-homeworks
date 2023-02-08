import Button from './Button';
import TextArea from './TextArea';

type TcommentAreaProps = {
    commentHandler: (val: string) => void
    clickHandler: () => void
    value: string
}

export default function CommentArea (props: TcommentAreaProps) {
    const {
        clickHandler,
        commentHandler,
        value,
    } = props;
    return (
        <>
            <div>
                <TextArea
                    placeholder='Comment text'
                    value={ value }
                    onChange={ (e) => commentHandler(e.target.value) }
                    required={ true }
                    label='Type your comment'
                    name='comment'
                    rows={ 2 }
                />
                <Button
                    label='Comment'
                    type='button'
                    onClick={ clickHandler }
                />
            </div>
        </>
    );
}
