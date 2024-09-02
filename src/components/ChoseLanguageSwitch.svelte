<script>
    import { onMount } from "svelte";

    let selectedLanguage = "PT";


    const setupLocalValue = () => {
        if(localStorage.getItem("language") != null) return;
        
        localStorage.setItem("language", selectedLanguage);
    }
    
    const dispatch = () => {
        const languageSwitch = new CustomEvent("languageSwitch", {detail: selectedLanguage});
			
        document.dispatchEvent(languageSwitch);        
    }

    const saveCheck = (el) => {
        let {target} = el;
        
        document.querySelectorAll(".selectLanguageInput").forEach(e => {
            e.checked = e == target;
        });

        selectedLanguage = target.id;
        localStorage.setItem("language", selectedLanguage);

        dispatch();
    }

    onMount(() => {
        setupLocalValue();

        selectedLanguage = localStorage.getItem("language");

        setTimeout(dispatch, 1);
    });
</script>

<div class="switch">
    <input type="checkbox" class="selectLanguageInput" id="PT" checked={selectedLanguage=="PT"} on:input={saveCheck}>
    <label class="switch__label" for="PT">
        <div class="text">
            {#if selectedLanguage == "PT"}
                🗣️
            {/if}
            PT
        </div>
    </label>
    <input type="checkbox" class="selectLanguageInput" id="EN" checked={selectedLanguage=="EN"} on:input={saveCheck}>
    <label class="switch__label" for="EN">
        <div class="text">
            {#if selectedLanguage == "EN"}
                🗣️
            {/if}
            EN
        </div>
    </label>
    <input type="checkbox" class="selectLanguageInput" id="FR" checked={selectedLanguage=="FR"} on:input={saveCheck}>
    <label class="switch__label" for="FR">
        <div class="text">
            {#if selectedLanguage == "FR"}
                👶🏻
            {/if}
            FR (GPT) 
        </div>
    </label>
</div>

<style lang="scss">
    /*
    Thanks to Murray Nuttall on CodePen
    https://codepen.io/irunatbullets/pen/MWwyVOw
    */

    @use "$style/palette";

    .switch {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        position: relative;
        filter: drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.25));
    }

    .selectLanguageInput {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }

    .switch__label {
        position: relative;
        display: inline-block;
        width: 120px;
        height: 60px;
        background: palette.$secondary;
        border: 5px solid palette.$iconbg;
        border-radius: 9999px;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(.46,.03,.52,.96);

        .text {
            color: palette.$switchTextColor;
            text-transform: capitalize;
            font-weight: bold;
            font-size: large;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }


    .selectLanguageInput:checked + .switch__label {
        background-color: #8FB5F5;
        border-color: palette.$highlight;

        .text {
            color: palette.$switchTextColor__checked;
        }
    }
</style>