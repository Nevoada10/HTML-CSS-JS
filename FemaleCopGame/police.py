import arcade

# Opening a game window is literally this simple
arcade.open_window(width=800, height=600, title="Female Cop Game")
arcade.run()  # Keeps window open

# Creating a character is just one line
player = arcade.Sprite("cop_sprite.png", scaling)

class MyCopGame(arcade.Window):
    def __init__(self):
        super().__init__(800, 600, "Cop Game")
        
    def on_draw(self):
        # Rendering graphics
        arcade.start_render()
        self.player.draw()
    
    def on_update(self, delta_time):
        # Game logic happens here
        self.player.update()