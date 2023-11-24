<script lang="ts">
  let fileInput: HTMLInputElement;
  let message = "";
  let predict = 0;
  let melanoma = 0;
  let other = 0;
  let imageUrl = "";
  let show = false;

  import { API_URL } from "../utils/constants";

  function volver() {
    message = "";
    predict = 0;
    melanoma = 0;
    other = 0;
    imageUrl = "";
    show = false;
  }

  async function sendData() {
    
    if (!fileInput.files) {
      return;
    }

    // Send Image
    const formData = new FormData();
    const imageFile = fileInput.files[0];
    formData.append("archivo", imageFile);
    const options = {
      method: "POST",
      body: formData,
    };

    try {
      const res  = await fetch(`${API_URL}`, options);
      const data = await res.json();
      const predicted_label = data.predicted_label;
      const scores = data.scores;
      console.log(predicted_label);
      console.log(scores);
      /*predict = data.predict;
      melanoma = data.melanoma;
      other = data.other;*/
      if (predicted_label == "melanoma") {
        message = "Se ha detectado un melanoma";
      } else {
        message = "No se ha detectado un melanoma";
      }
    } catch (error) {
      console.log(error);
      message = "Error al subir la imagen";
    }

    show = true;
  }

  function previewImage() {
    if (!fileInput.files) {
      return;
    }
    const imageFile = fileInput.files[0];
    if (imageFile) {
      imageUrl = URL.createObjectURL(imageFile);
    }
  }
</script>

<div class="form">
  <div class="wrapper">
    {#if show == false}
      <div class="wrapp">
        <div class="upload">
          <label for="file"> Sube tu imagen </label>
          <input
            class="file-upload"
            type="file"
            name="file"
            bind:this={fileInput}
            on:change={previewImage}
          />
        </div>

        {#if imageUrl}
          <div class="view-preview">
            <div class="image">
              <img src={imageUrl} alt="preview" />
              {#if fileInput.files}
                <p>{fileInput.files[0].name}</p>
              {/if}
            </div>
            <input
              class="btn"
              type="submit"
              value="Evaluar"
              on:click={sendData}
            />
          </div>
        {/if}
      </div>
    {/if}
    {#if show == true}
      <div class="result">
        <img src={imageUrl} alt="preview" />
        <div class="response">
          <ul>
            <li>
              <div class="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 24L4 16H18C19.1 16 24 15.1 24 14V2C24 0.9 19.1 0 18 0H2ZM4 10H16V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="item">
                <h4>Resultado:</h4>
                <p>{message}</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <p>MEL</p>
              </div>
              <div class="item">
                <h4>Melanoma:</h4>
                <p>{melanoma}</p>
              </div>
            </li>
            <li>
              <div class="icon">
                <p>NEL</p>
              </div>
              <div class="item">
                <h4>Other:</h4>
                <p>{other}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <button class="btn" on:click={volver}>Analizar otra imagen</button>
    {/if}
  </div>
</div>

<style>
  .form {
    background-color: var(--primary-100);
    padding: 48px 0px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .wrapp {
    display: flex;
    flex-direction: column;
  }

  .upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px;
  }

  .upload .file-upload {
    border: 2px solid var(--primary-800);
    background-color: var(--primary-200);
    border-style: dashed;
    padding: 64px 24px;
    cursor: pointer;
  }

  .file-upload::file-selector-button {
    visibility: hidden;
  }

  .file-upload::before {
    content: "Arrastra una imagen o haz click aquí";
    display: inline-flex;
    outline: none;
    user-select: none;
    cursor: pointer;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .view-preview {
    width: 600px;
    height: 100px;
    object-fit: cover;

    background-color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 32px;
  }

  .view-preview .image {
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
  }

  .view-preview img {
    height: 80%;
  }

  .btn {
    bottom: 0;
    right: 0;
    border-radius: 0px;
    color: white;
    border: none;
    background-color: var(--primary-800);

    width: fit-content;
  }

  .btn:hover {
    background-color: var(--primary-700);
  }

  .wrapper .result {
    display: flex;
    flex-direction: row;
    gap: 48px;
    align-items: center;
    justify-content: flex-end;
    margin: 2rem;
  }

  .result img {
    height: 320px;
  }

  .result .response ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;

    gap: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .response ul li {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .response ul li .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-400);
    border-radius: 4px;
    color: white;
    padding: 0.5rem;

    min-width: 50px;
    min-height: 40px;
  }

  .response ul li h4 {
    text-align: start;
  }
</style>
