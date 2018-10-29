export const componentData = [ { name: 'Button',
    data: 
     { description: '',
       displayName: 'Button',
       props: 
        { color: 
           { defaultValue: null,
             description: 'The color of the Button, this will overide the btnType default colors',
             name: 'color',
             required: false,
             type: { name: 'string' } },
          btnType: 
           { defaultValue: { value: 'Primary' },
             description: 'The type of Button when it comes to style',
             name: 'btnType',
             required: false,
             type: 
              { name: '"Primary" | "Info" | "Success" | "Danger" | "Warning"' } },
          size: 
           { defaultValue: { value: 'md' },
             description: 'The size of the Button',
             name: 'size',
             required: false,
             type: { name: '"sm" | "md" | "lg"' } },
          className: 
           { defaultValue: null,
             description: 'Your personal className for the Button',
             name: 'className',
             required: false,
             type: { name: 'string' } },
          type: 
           { defaultValue: null,
             description: 'Html button type Attribute',
             name: 'type',
             required: false,
             type: { name: '"submit" | "button" | "reset"' } },
          onClick: 
           { defaultValue: null,
             description: 'OnClick function',
             name: 'onClick',
             required: true,
             type: { name: '() => void' } } } },
    examples: 
     [ { code: 'class BasicButton extends React.Component {\n  render() {\n    return (\n      <div>\n        {" "}\n        <Button onClick={() => false}>Primary</Button>{" "}\n        <Button btnType="Success" onClick={() => false}>\n          {" "}\n          Success{" "}\n        </Button>{" "}\n        <Button btnType="Info" onClick={() => false}>\n          {" "}\n          Info{" "}\n        </Button>{" "}\n        <Button btnType="Warning" onClick={() => false}>\n          {" "}\n          Warning{" "}\n        </Button>{" "}\n        <Button btnType="Danger" onClick={() => false}>\n          {" "}\n          Danger{" "}\n        </Button>{" "}\n      </div>\n    );\n  }\n}\n' } ] },
  { name: 'Input',
    data: 
     { description: '',
       displayName: 'Input',
       props: 
        { value: 
           { defaultValue: null,
             description: '',
             name: 'value',
             required: true,
             type: { name: 'string' } },
          placeholder: 
           { defaultValue: null,
             description: '',
             name: 'placeholder',
             required: true,
             type: { name: 'string' } },
          handleChange: 
           { defaultValue: null,
             description: '',
             name: 'handleChange',
             required: true,
             type: { name: '(e: ChangeEvent<HTMLInputElement>) => void' } } } },
    examples: [] },
  { name: 'Table',
    data: 
     { description: '',
       displayName: 'Table',
       props: 
        { styledFunc: 
           { defaultValue: null,
             description: 'A function that returns css that will be injected to the component',
             name: 'styledFunc',
             required: false,
             type: { name: '() => string' } } } },
    examples: [] } ]