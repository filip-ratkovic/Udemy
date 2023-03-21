const addBtn = document.getElementById('add');

addBtn.addEventListener('click', ()=> addNewNote());

const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    
            <div class="tools">
                <button class="edit">Edit</button>
                <button class="delete">Del</button>
            </div>

            <div class="main ${text ? '' : 'hidden'}"></div>
            <textarea ${text ? 'hidden' : ''}></textarea>
        `

        const deleteBtn = note.querySelector('.delete');
        const editBtn = note.querySelector('.edit');
        const main = note.querySelector('.main');
        const textArea = note.querySelector('textarea');

        deleteBtn.addEventListener('click', () => {
            note.remove()
        })

        editBtn.addEventListener('click', () => {
           main.classList.toggle('hidden');
           textArea.classList.toggle('hidden')
        })

        document.body.appendChild(note)
}