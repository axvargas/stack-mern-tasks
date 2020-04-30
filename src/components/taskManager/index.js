import React from 'react';

export default () => {

    useEffect(() => {
        console.log('The component was mounted')
        
    });

    fetchTasks = () => {
        fetch('/api/tasks')
            .then(res => res.json)
            .then(data => console.log(data));
    }
    return (
        <div>
           
        </div>
    );
}
