import './App.css';
import {default as SearchInput} from './components/search/Input'
import React from "react";
import {default as Table} from './components/list/Table'
import {MASTER_DATA, DETAIL_DATA} from './demoResources/Data'
import {MASTER_COLUMNS, DETAIL_COLUMNS} from './demoResources/Columns';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SearchInput/>
            </header>
            <div className="App-content">
                <div className="App-master">
                    <Table items={MASTER_DATA} columns={MASTER_COLUMNS}/>
                </div>
                <div className="App-content">
                    <Table items={DETAIL_DATA} columns={DETAIL_COLUMNS}/>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}

export default App;
