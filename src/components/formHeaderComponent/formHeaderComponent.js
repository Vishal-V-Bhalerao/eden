import './index.css'
export default function FormHeaderComponent() {
    return (
        <div className="flex-div flex-column">
            <div className="flex-div flex-row header-main" >
                <h2>Welcome! First things First...</h2>
            </div>
            <div className="flex-div flex-row header-sub" >
                <span>You can always change them later.</span>
            </div>
        </div>
    )
}