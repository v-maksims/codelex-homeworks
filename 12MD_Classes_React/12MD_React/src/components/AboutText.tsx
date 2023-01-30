export function AboutText() {
    return (
        <div className="is-size-5 has-text-weight-medium">
            <h4 className="is-size-4 has-text-centered has-text-weight-bold is-family-code has-text-primary-dark"> Information about this app</h4>
            <span className="">Enter your task in the first input field, then press add.</span>
            <br />
            <span> Your task will appear below the edit element.</span>
            <br />
            <h4 className="is-size-4 has-text-weight-bold is-family-code has-text-info"> Editing:</h4>
            <h4 className="is-size-4 has-text-weight-bold is-family-code has-text-centered has-text-link"> You can change the task. To do this you need to:</h4>
            <ol>
                <li>Press the edit button</li>
                <li>Write in the text field that appears what you want to change to.</li>
                <li>Select the task and press edit next to it.</li>
            </ol>
            <h4 className="is-size-4 has-text-weight-bold is-family-code has-text-centered has-text-link"> Editing:</h4>
            <span>When you press edit, all possible tasks are highlighted in green so you can edit.</span>
            <h4 className="is-size-4 has-text-weight-bold is-family-code has-text-centered has-text-link"> A task can't be changed if:</h4>
            <ol>
                <li>The task is marked as completed.</li>
            </ol>
            <br />
            <span className="has-text-danger">If the input field is empty, an error will appear under the input field for editing when the task is changed.</span>
        </div >
    )
}
