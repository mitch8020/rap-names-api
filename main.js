document.querySelector('name').addEventListener('click', getRapper)

async function getRapper() {
  const rapper = document.querySelector('name').value

  const response = await fetch(`localhost:8000/api/${rapper}`)
  response.then(res => res.json())
          .then(data => {
            console.log(data)
          })
}