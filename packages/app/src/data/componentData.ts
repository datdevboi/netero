export const componentData = [ { name: 'Button',
    data: 
     { description: '',
       displayName: 'Button',
       props: 
        { color: 
           { defaultValue: null,
             description: '',
             name: 'color',
             required: false,
             type: { name: 'string' } },
          type: 
           { defaultValue: { value: 'Primary' },
             description: '',
             name: 'type',
             required: false,
             type: 
              { name: '"Primary" | "Info" | "Success" | "Danger" | "Warning"' } },
          size: 
           { defaultValue: { value: 'md' },
             description: '',
             name: 'size',
             required: false,
             type: { name: '"sm" | "md" | "lg"' } },
          className: 
           { defaultValue: null,
             description: '',
             name: 'className',
             required: false,
             type: { name: 'string' } },
          onClick: 
           { defaultValue: null,
             description: '',
             name: 'onClick',
             required: true,
             type: { name: '() => void' } } } } } ]