/*
class constructor_firework{
    creat_oval_start(){

    }
}

class puchok{
    // Рисуем овал
    drawOval() {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.ellipse(x, y, 50, 50);
        ctx.fill();
    }

    // Обновляем позицию овала
    update() {
        x += vx;
        y += vy;

        // Если овал вышел за пределы холста, разворачиваем его
        if (x < 0) {
          x = width;
        } else if (x > width) {
          x = 0;
        }

        if (y < 0) {
          y = height;
        } else if (y > height) {
          y = 0;
        }

        // Запускаем рисование
        drawOval();
    }

}

class All_render_form{
    setup(){
        const canvas = document.getElementById("fireworks-canvas");
        window.ctx = canvas.getContext("2d");

        console.log(window.ctx)

        console.log("работает")

        // Настройки фейерверка
        window.init_puchok = {
            colors: ["red", "green", "blue", "yellow", "orange"],
            directions: = ["up", "down", "left", "right"],
            speeds: = [10, 20, 30, 40]
        }

        //Запуск фейерверка на скорости 30 раз в секунду
        document.getElementById("firework").addEventListener("click", () => {
            window.timer = setInterval(this.setup_group, 1000 / 30);
            setTimeout(() => {
                clearInterval(window.timer);
            }, 5000);
        });
    }
    //функция для обновления картинки 30 раз в секунду
    setup_group(){
        (new puchok).update()
    }
}

(new All_render_form).setup()
*/
