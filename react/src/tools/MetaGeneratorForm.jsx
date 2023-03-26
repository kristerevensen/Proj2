import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import openai from 'openai';
import { Configuration, OpenAIApi } from 'openai';

//openai.apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const apiKey = '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';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function MetaGeneratorForm() {
    const [enabledPageTitle, setEnabledPageTitle] = useState(false);
    const [enabledMetaTags, setEnabledMetaTags] = useState(false);
    const [pageUrl, setPageUrl] = useState();
    const [keywords, setKeywords] = useState();
    const [generatedPageTitle, setGeneratedPageTitle] = useState();
    const [generatedMetaTag, setGeneratedMetaTag] = useState();
    
    const onSubmit = async (e) => {

       // console.log(e.target.keywords.value);
        e.preventDefault();
        if (enabledPageTitle) {
            const promptTitle = `Create a page title with keyword ${keywords}, which is no longer than 60 characters`;
            const pageTitle = await fetchChatGPTResponse(promptTitle);
            setGeneratedPageTitle(pageTitle);
            console.log('Pagetitle: '+ pageTitle);
        }

        // if (enabledMetaTags) {
        //     const promptMetaDescription = `Create a meta description with keywords ${keywords} which is no longer than 160 characters`;
        //     const metaDescription = await fetchChatGPTResponse(promptMetaDescription);
        //     setGeneratedMetaTag(metaDescription);
        //     console.log('Meta desc: '+ metaDescription);
        // }
    };
    const apiKey = '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';

    //const openai = new OpenAIApi(configuration);


    async function fetchChatGPTResponse(prompt) {
        try {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{role: "user", content: `${prompt}`}],
            n: 1,
            stop: null,
            temperature: 1,
          }),
        };
        const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', requestOptions);
        const data = await response.json();

        console.log('Request:' + JSON.stringify(requestOptions));
        console.log('Response:' + JSON.stringify(response));
    } catch (error) {
        console.error('Error:', error);
    }
    }
    

    async function generateCompletion(promptText) {
        try {
            const completion = await openai.createChatCompletion({
                engine: 'gpt-3.5-turbo',
                messages: [{role: "user", content: `${promptText}`}],
                n: 1,
                stop: null,
                temperature: 0.8,
            });
            return completion.choices[0].text;
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <>
            <div className="space-y-10 divide-y divide-gray-900/10">
                <div className="grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-3">
                    <div className="px-4 sm:px-0">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Meta Tag & Page Title Generator</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            The generator will create a meta tag and page title for your website using chatGPT-3.
                        </p>
                    </div>

                    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2" onSubmit={onSubmit} method="POST" id='metaGeneratorForm'>
                        <div className="px-4 py-6 sm:p-8">
                            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                                <div className="col-span-full">
                                    <label htmlFor="pageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                                        Page URL
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-full">
                                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                            <input
                                                type="text"
                                                name="pageUrl"
                                                id="pageUrl"
                                                onChange={setPageUrl}
                                                className="block  w-full  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="https://www.example.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="pageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                                        Keywords to include (optional)
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-full">
                                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                            <input
                                                type="text"
                                                name="keywords"
                                                id="keywords"
                                                onChange={setKeywords}
                                                className="block  w-full  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="keyword, keyword2.."
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:col-span-2 sm:col-start-1'>
                                    <label htmlFor="pageUrl" className="block mb-2 text-sm font-medium leading-6 text-gray-900">
                                        Generate Meta Tags
                                    </label>
                                    <Switch
                                        checked={enabledMetaTags}
                                        onChange={setEnabledMetaTags}
                                        className={classNames(
                                            enabledMetaTags ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                        )}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                enabledMetaTags ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <div className='sm:col-span-2'>
                                    <label htmlFor="pageUrl" className="block mb-2 text-sm font-medium leading-6 text-gray-900">
                                        Generate Page Title
                                    </label>
                                    <Switch
                                        checked={enabledPageTitle}
                                        onChange={setEnabledPageTitle}
                                        className={classNames(
                                            enabledPageTitle ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                                        )}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                enabledPageTitle ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="generatedPageTitle" className="block text-sm font-medium leading-6 text-gray-900">
                                        Generated Page Title
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-full">
                                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                            <input
                                                type="text"
                                                name="generatedPageTitle"
                                                id="generatedPageTitle"
                                                value={generatedPageTitle} 
                                                className="block  w-full  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="keyword, keyword2.."
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="generatedMetaTag" className="block text-sm font-medium leading-6 text-gray-900">
                                        Generated Meta Description
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="generatedMetaTag"
                                            name="generatedMetaTag"
                                            
                                            value={generatedMetaTag}
                                            rows={3}
                                            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Generated meta tag appears here</p>
                                </div>


                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 py-4 px-4 sm:px-8">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
